import React, { useState } from "react";
import { Terminal, Shield, Cpu, RefreshCw, Layers, CheckCircle2 } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("code");
  const [code, setCode] = useState(
    `// Buggy Arduino Sketch\nvoid setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n  digitalWrite(13, LOW);\n  // Missing delay here causing compilation error or loop glitch\n}`
  );

  return (
    <div className="min-h-screen bg-[#0f0f11] text-gray-100 font-sans selection:bg-teal-500 selection:text-black">
      {/* 1. HERO SECTION */}
      <nav className="border-b border-gray-800 bg-[#0f0f11]/80 backdrop-blur sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-teal-500 to-blue-600 flex items-center justify-center font-bold text-black text-lg">P</div>
          <span className="font-bold tracking-tight text-xl">PrivaCode <span className="text-teal-400 text-sm font-mono">AI</span></span>
        </div>
        <a href="#demo" className="bg-teal-500 hover:bg-teal-400 text-black px-4 py-2 rounded-md font-medium text-sm transition-all shadow-lg shadow-teal-500/10">
          See How It Works
        </a>
      </nav>

      <header className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 max-w-3xl mx-auto leading-tight">
          Your Private, Offline AI Coding Tutor for Arduino
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Runs 100% locally on your Snapdragon NPU. Zero internet connection required. Absolute privacy with zero source code or student data leakage.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#demo" className="bg-teal-500 hover:bg-teal-400 text-black px-6 py-3 rounded-md font-semibold transition-all">
            Launch Interactive Demo
          </a>
          <a href="#features" className="border border-gray-700 hover:border-gray-500 px-6 py-3 rounded-md font-semibold transition-all">
            Explore Hardware Features
          </a>
        </div>
      </header>

      {/* 2. PROBLEM SECTION */}
      <section className="bg-[#141417] border-y border-gray-800 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xs uppercase tracking-widest text-teal-400 font-mono font-semibold">The Prototyping Gap</h2>
          <p className="mt-4 text-xl md:text-2xl text-gray-300 font-medium leading-relaxed">
            "Students learning embedded C/C++ often can't get quick, private help debugging Arduino code. Cloud-based AI tools require constant internet and expose academic codebases to external servers."
          </p>
        </div>
      </section>

      {/* 3. SOLUTION / HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { num: "01", title: "Write Code", desc: "Student writes an Arduino C/C++ sketch in the local PrivaCode application dashboard." },
            { num: "02", title: "Local NPU Analysis", desc: "If compilation fails, the local Snapdragon NPU analyzes syntax & hardware logic with no internet needed." },
            { num: "03", title: "Get Instant Fix", desc: "The assistant highlights errors, details the root cause, and provides secure optimizations." },
            { num: "04", title: "Flash Hardware", desc: "The verified, optimized code is directly compiled and flashed straight to the Arduino UNO Q Board." }
          ].map((step, idx) => (
            <div key={idx} className="bg-[#141417] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all">
              <div className="text-3xl font-mono font-bold text-teal-500/30 mb-4">{step.num}</div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DASHBOARD PREVIEW / MOCKUP SECTION */}
      <section id="demo" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-4">PrivaCode Unified Dashboard</h2>
        <p className="text-gray-400 text-center mb-8 max-w-xl mx-auto text-sm">Conceptual interface visualization running optimized local architecture providers.</p>
        
        <div className="bg-[#141417] rounded-xl border border-gray-800 overflow-hidden shadow-2xl">
          {/* Editor Header Toolbar */}
          <div className="bg-[#0f0f11] border-b border-gray-800 px-4 py-3 flex justify-between items-center text-xs font-mono text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
              <span className="ml-2 text-gray-300">sketch_sept28a.ino (Arduino UNO Q)</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-teal-400 flex items-center gap-1"><Cpu size={12}/> Snapdragon NPU: ACTIVE</span>
              <span className="text-gray-500">|</span>
              <span className="text-red-400">Offline Mode</span>
            </div>
          </div>
          
          {/* Main Workspace Layout */}
          <div className="grid md:grid-cols-12 min-h-[380px]">
            {/* Left Side: Code Editor Input Workspace */}
            <div className="md:col-span-7 p-4 font-mono text-sm border-r border-gray-800 bg-[#16161a]">
              <textarea 
                value={code} 
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-full bg-transparent text-teal-300 focus:outline-none resize-none font-mono leading-relaxed" 
                rows={12}
              />
              <div className="mt-4 pt-4 border-t border-gray-800/60 flex justify-between">
                <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs px-4 py-2 rounded flex items-center gap-2 transition-all">
                  <Terminal size={14}/> Verify Sketch
                </button>
                <button className="bg-teal-500 hover:bg-teal-400 text-black font-semibold text-xs px-4 py-2 rounded flex items-center gap-2 transition-all">
                  Compile & Flash to Arduino
                </button>
              </div>
            </div>

            {/* Right Side: Local AI Mentorship Sidebar Panel */}
            <div className="md:col-span-5 bg-[#0f0f11] p-4 flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold tracking-wider uppercase text-gray-500 font-mono mb-3">Local PrivaCode AI Assistant</div>
                <div className="bg-[#141417] border border-gray-800 rounded p-3 text-xs font-mono text-gray-300 mb-2 leading-relaxed">
                  <span className="text-teal-400 font-bold">🤖 System Flag:</span> Bug detected in `loop()`. You initialized an infinite hardware state machine loop without configuring a secondary boundary clock variable or interval delay, causing CPU execution stall.
                </div>
                <div className="bg-teal-950/20 border border-teal-800/40 rounded p-3 text-xs font-mono text-teal-300">
                  <span className="font-bold">💡 Recommended Action:</span> Add `delay(1000);` directly following your low digital register state invocation to properly regulate hardware operational frequency on the board.
                </div>
              </div>
              <div className="mt-4 text-[11px] font-mono text-gray-500 text-center flex items-center justify-center gap-2">
                <Shield size={12} className="text-green-500"/> Secure local computational sandbox execution stack.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURES GRID */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-800/60">
        <h2 className="text-3xl font-bold text-center mb-12">Core Capabilities Matrix</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <RefreshCw className="text-teal-400"/>, title: "100% Offline Execution", desc: "Runs entirely on-device, processing instructions with completely zero dependencies on cloud databases." },
            { icon: <Shield className="text-teal-400"/>, title: "Absolute Data Privacy", desc: "Your code never leaves your terminal. Safely sandbox execution context away from public data training sets." },
            { icon: <Terminal className="text-teal-400"/>, title: "Hardware-Aware Logic", desc: "Direct specialized understanding of physical pin assignments, parameters, and Arduino compiler errors." },
            { icon: <Cpu className="text-teal-400"/>, title: "Snapdragon NPU Acceleration", desc: "Runs lightning-fast quantized open-source engineering LLMs directly via hardware acceleration runtimes." },
            { icon: <Layers className="text-teal-400"/>, title: "Arduino CLI Engine Integration", desc: "Seamless terminal bridge allows code verification, compilation, and flashing directly out of the interface." },
            { icon: <CheckCircle2 className="text-teal-400"/>, title: "Energy Efficient Compute", desc: "Bypasses standard heavy processor structures to dramatically minimize system battery draw." }
