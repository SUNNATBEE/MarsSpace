import React, { useEffect, useRef, useState } from "react";

export default function RegistrationPage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const mouse = {
      x: null,
      y: null,
      radius: 120,
    };

    class Particle {
      constructor(x, y, color = "#fff") {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.originX = x;
        this.originY = y;

        this.vx = 0;
        this.vy = 0;

        this.size = 3;
        this.color = color;
      }

      update() {
        if (mouse.x !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;

            this.vx += (dx / distance) * force * 2;
            this.vy += (dy / distance) * force * 2;
          }
        }

        this.vx += (this.originX - this.x) * 0.03;
        this.vy += (this.originY - this.y) * 0.03;

        this.vx *= 0.92;
        this.vy *= 0.92;

        this.x += this.vx;
        this.y += this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;

        ctx.fill();
      }
    }

    const createLogo = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = "bold 120px Arial";
      ctx.textAlign = "center";
      ctx.fillStyle = "white";

      ctx.fillText("MARS", canvas.width / 2, 180);

      const image = ctx.getImageData(0, 0, canvas.width, canvas.height);

      const gap = 6;

      for (let y = 0; y < canvas.height; y += gap) {
        for (let x = 0; x < canvas.width; x += gap) {
          const index = (y * canvas.width + x) * 4;

          if (image.data[index + 3] > 128) {
            particles.push(new Particle(x, y));
          }
        }
      }

      const ringX = canvas.width / 2 + 240;
      const ringY = 115;
      const radius = 18;

      for (let i = 0; i < 25; i++) {
        const angle = (Math.PI * 2 * i) / 25;

        particles.push(
          new Particle(
            ringX + Math.cos(angle) * radius,
            ringY + Math.sin(angle) * radius,
            "#ff6b2c"
          )
        );
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    createLogo();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const move = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#01031b] relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="w-[560px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 rounded-[32px] backdrop-blur-[30px] bg-white/60 border border-white/20 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
        <div className="flex justify-between mb-[30px]">
          <span onClick={() => {window.close()}} className="text-[#d6d6d6] cursor-pointer">📄 Offerta</span>

          <select className="border-none px-[18px] py-[10px] rounded-full bg-white/80 cursor-pointer appearance-none">
            <option value="uz">🌐 O'zb</option>
            <option value="ru">Рус</option>
            <option value="en">Eng</option>
          </select>
        </div>

        <h1 className="text-center text-black text-3xl font-bold mb-2">
          Spacega xush kelibsiz
        </h1>

        <p className="text-center text-[#1A1C3380] mb-[25px]">
          Bugun nimani o'rganamiz?
        </p>

        <div className="flex bg-white/40 p-1 rounded-2xl mb-5">
          <button
            onClick={() => setRole("student")}
            className={`flex-1 p-[10px] rounded-xl border-none cursor-pointer bg-white`}
          >
            Student
          </button>

          <button
            blocked
            className={`flex-1 p-[10px] rounded-xl border-none cursor-not-allowed bg-transparent`}
          >
            Ota-ona
          </button>
        </div>

        <input
          placeholder="Mars ID"
          className="w-full p-[10px] mb-4 rounded-2xl border border-white/20 bg-white/10 text-white outline-none"
        />

        <input
          type="password"
          placeholder="Parol"
          className="w-full p-[10px] mb-5 rounded-2xl border border-white/20 bg-white/10 text-white outline-none"
        />

        <button className="w-full p-[10px] transform transition-transform hover:-translate-y-1 rounded-2xl bg-[#d58b71] text-white font-bold cursor-pointer">
          Kirish
        </button>

        <p className="text-center text-white/60 mt-5">
          Akkauntga ega emasmisiz?{" "}
          <strong className="text-gray-700 transition-colors cursor-pointer hover:text-[#d58b71]">Ro'yhatdan o'tish</strong>
        </p>
      </div>
    </div>
  );
}