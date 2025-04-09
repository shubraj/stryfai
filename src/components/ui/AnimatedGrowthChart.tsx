"use client";

import { useEffect, useRef, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  type ChartOptions,
  type ChartData
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface AnimatedGrowthChartProps {
  title?: string;
  className?: string;
}

export default function AnimatedGrowthChart({ title, className = "" }: AnimatedGrowthChartProps) {
  const chartRef = useRef<ChartJS>(null);
  const [isClient, setIsClient] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);

  // Years for X-axis
  const years = ["2023", "2024", "2025", "2026", "2027", "2028"];

  // Projected hours saved (in millions) over the years
  const baseData = [0.5, 2, 4.5, 6.8, 8.5, 10];

  // Animated data that will grow based on animation progress
  const animatedData = baseData.map(value => value * animationProgress);

  useEffect(() => {
    setIsClient(true);
    let animationFrame: number;
    let startTimestamp: number | null = null;
    const animationDuration = 2000; // 2 seconds

    const animateChart = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / animationDuration, 1);
      setAnimationProgress(progress);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateChart);
      }
    };

    animationFrame = requestAnimationFrame(animateChart);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  const chartData: ChartData<'line'> = {
    labels: years,
    datasets: [
      {
        label: 'Ore risparmiate (milioni)',
        data: animatedData,
        borderColor: 'rgba(99, 102, 241, 1)', // Indigo color
        backgroundColor: 'rgba(99, 102, 241, 0.15)', // Light indigo background
        borderWidth: 2,
        pointBackgroundColor: 'rgba(99, 102, 241, 1)',
        pointBorderColor: '#fff',
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.4, // Smooth curve
        fill: true
      }
    ]
  };

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 0 // Disable default animation since we're animating manually
    },
    plugins: {
      legend: {
        labels: {
          color: 'rgba(255, 255, 255, 0.8)' // Light text for dark theme
        }
      },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.9)', // Dark background
        titleColor: 'rgba(255, 255, 255, 0.9)',
        bodyColor: 'rgba(255, 255, 255, 0.9)',
        borderColor: 'rgba(99, 102, 241, 0.3)',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: (context) => `${context.parsed.y.toFixed(1)} milioni di ore risparmiate`
        }
      },
      title: {
        display: !!title,
        text: title || '',
        color: 'rgba(255, 255, 255, 0.9)',
        font: {
          size: 16
        },
        padding: {
          bottom: 20
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.8)'
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.8)',
          callback: (value) => `${value}M`
        }
      }
    }
  };

  if (!isClient) {
    return (
      <div className={`w-full h-[300px] bg-muted rounded-lg flex items-center justify-center ${className}`}>
        <div className="text-gray-400">Caricamento del grafico...</div>
      </div>
    );
  }

  return (
    <div className={`w-full h-[300px] bg-muted rounded-lg p-4 ${className}`}>
      <Line ref={chartRef} options={chartOptions} data={chartData} />
    </div>
  );
}
