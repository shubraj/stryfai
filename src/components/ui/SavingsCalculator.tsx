"use client";

import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import CountUpAnimation from './CountUpAnimation';
import { LucideClock, LucideUsers, LucideBriefcase, LucideSettings, LucideChevronRight } from 'lucide-react';

interface CalculatorProps {
  className?: string;
  title?: string;
}

export default function SavingsCalculator({ className = "", title }: CalculatorProps) {
  const [isClient, setIsClient] = useState(false);
  const [employees, setEmployees] = useState(10);
  const [hoursPerDay, setHoursPerDay] = useState(1);
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [efficiency, setEfficiency] = useState(50);
  const [annualSavings, setAnnualSavings] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Calculate annual hours saved when inputs change
  useEffect(() => {
    // Calculate hours saved per year based on inputs
    // Formula: employees × hoursPerDay × daysPerWeek × 52 weeks × efficiency%
    const weeksPerYear = 52;
    const calculatedSavings = employees * hoursPerDay * daysPerWeek * weeksPerYear * (efficiency / 100);
    setAnnualSavings(Math.round(calculatedSavings));
  }, [employees, hoursPerDay, daysPerWeek, efficiency]);

  useEffect(() => {
    setIsClient(true);
    setShowResult(true);
  }, []);

  // Handle slider change
  const handleSliderChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<number>>,
    min: number,
    max: number
  ) => {
    const value = Number.parseFloat(e.target.value);
    if (!Number.isNaN(value) && value >= min && value <= max) {
      setter(value);
      setShowResult(false);
      setTimeout(() => setShowResult(true), 300);
    }
  };

  // Format number with thousand separators
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <Card className={`bg-muted p-4 md:p-8 border-primary/10 ${className}`}>
      {title && <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">{title}</h3>}

      <div className="space-y-8">
        {/* Employees slider */}
        <div className="space-y-3 bg-secondary/30 p-4 rounded-lg shadow-inner">
          <div className="flex justify-between items-center mb-2">
            <label className="flex items-center gap-2 text-md font-medium">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20">
                <LucideUsers className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm md:text-base">Numero di dipendenti</span>
            </label>
            <span className="text-xl font-bold bg-primary/10 py-1 px-3 rounded-md">{employees}</span>
          </div>
          <input
            type="range"
            min="1"
            max="100"
            value={employees}
            onChange={(e) => handleSliderChange(e, setEmployees, 1, 100)}
            className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
            style={{
              padding: '12px 0',
              marginTop: '-12px',
              marginBottom: '-12px'
            }}
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>1</span>
            <span>50</span>
            <span>100</span>
          </div>
        </div>

        {/* Hours per day slider */}
        <div className="space-y-3 bg-secondary/30 p-4 rounded-lg shadow-inner">
          <div className="flex justify-between items-center mb-2">
            <label className="flex items-center gap-2 text-md font-medium">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/20">
                <LucideClock className="h-5 w-5 text-green-500" />
              </div>
              <span className="text-sm md:text-base">Ore al giorno per attività ripetitive</span>
            </label>
            <span className="text-xl font-bold bg-green-500/10 py-1 px-3 rounded-md">{hoursPerDay}</span>
          </div>
          <input
            type="range"
            min="0.5"
            max="8"
            step="0.5"
            value={hoursPerDay}
            onChange={(e) => handleSliderChange(e, setHoursPerDay, 0.5, 8)}
            className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500"
            style={{
              padding: '12px 0',
              marginTop: '-12px',
              marginBottom: '-12px'
            }}
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>0.5h</span>
            <span>4h</span>
            <span>8h</span>
          </div>
        </div>

        {/* Days per week slider */}
        <div className="space-y-3 bg-secondary/30 p-4 rounded-lg shadow-inner">
          <div className="flex justify-between items-center mb-2">
            <label className="flex items-center gap-2 text-md font-medium">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-500/20">
                <LucideBriefcase className="h-5 w-5 text-violet-500" />
              </div>
              <span className="text-sm md:text-base">Giorni lavorativi a settimana</span>
            </label>
            <span className="text-xl font-bold bg-violet-500/10 py-1 px-3 rounded-md">{daysPerWeek}</span>
          </div>
          <input
            type="range"
            min="1"
            max="7"
            value={daysPerWeek}
            onChange={(e) => handleSliderChange(e, setDaysPerWeek, 1, 7)}
            className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-violet-500"
            style={{
              padding: '12px 0',
              marginTop: '-12px',
              marginBottom: '-12px'
            }}
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>1</span>
            <span>5</span>
            <span>7</span>
          </div>
        </div>

        {/* Efficiency slider */}
        <div className="space-y-3 bg-secondary/30 p-4 rounded-lg shadow-inner">
          <div className="flex justify-between items-center mb-2">
            <label className="flex items-center gap-2 text-md font-medium">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500/20">
                <LucideSettings className="h-5 w-5 text-cyan-500" />
              </div>
              <span className="text-sm md:text-base">Efficienza IA (%)</span>
            </label>
            <span className="text-xl font-bold bg-cyan-500/10 py-1 px-3 rounded-md">{efficiency}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="100"
            value={efficiency}
            onChange={(e) => handleSliderChange(e, setEfficiency, 10, 100)}
            className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            style={{
              padding: '12px 0',
              marginTop: '-12px',
              marginBottom: '-12px'
            }}
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>10%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Results */}
        <div className="mt-12 pt-6 border-t border-gray-700">
          <h4 className="text-lg font-bold mb-4 flex items-center">
            <LucideChevronRight className="text-primary mr-2 h-5 w-5" />
            <span>Risparmio annuale stimato:</span>
          </h4>
          <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-6 text-center shadow-lg">
            {isClient && showResult ? (
              <div className="flex flex-col items-center">
                <CountUpAnimation
                  targetValue={annualSavings}
                  duration={1000}
                  className="text-4xl md:text-5xl font-bold text-primary"
                />
                <p className="text-lg mt-2 text-gray-300">ore all'anno</p>
                <p className="mt-4 text-md text-gray-400">
                  Equivalente a <span className="font-bold text-primary">{Math.round(annualSavings / 8)}</span> giorni lavorativi
                </p>
                <p className="mt-4 text-md text-gray-400">
                  Risparmio economico: <span className="font-bold text-green-500">{formatNumber(annualSavings * 20)}€</span> (a 20€/ora)
                </p>
              </div>
            ) : (
              <div className="min-h-[120px] flex flex-col items-center justify-center">
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  {formatNumber(annualSavings)}
                </div>
                <p className="text-lg mt-2 text-gray-300">ore all'anno</p>
                <p className="mt-4 text-md text-gray-400">
                  Equivalente a <span className="font-bold text-primary">{Math.round(annualSavings / 8)}</span> giorni lavorativi
                </p>
                <p className="mt-4 text-md text-gray-400">
                  Risparmio economico: <span className="font-bold text-green-500">{formatNumber(annualSavings * 20)}€</span> (a 20€/ora)
                </p>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-400 mt-4 text-center">
            *Stima basata sui dati medi di efficienza degli agenti IA di Stryfai
          </p>
        </div>
      </div>
    </Card>
  );
}
