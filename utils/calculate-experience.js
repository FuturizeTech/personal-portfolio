export function calculateTotalExperience(experiences) {
  let totalMonths = 0;

  experiences.forEach(exp => {
    // Skip training period (id: 3)
    if (exp.id === 3) {
      return;
    }

    const duration = exp.duration.replace(/[()]/g, ''); // Remove parentheses
    const parts = duration.split(' - ');

    if (parts.length === 2) {
      const startStr = parts[0];
      const endStr = parts[1];

      const startDate = parseDate(startStr);
      const endDate = endStr.toLowerCase() === 'present' ? new Date() : parseDate(endStr);

      if (startDate && endDate) {
        const diffTime = endDate - startDate;
        const diffMonths = diffTime / (1000 * 60 * 60 * 24 * 30.44);
        totalMonths += diffMonths;
      }
    }
  });

  const totalYears = Math.floor(totalMonths / 12);
  const remainingMonths = Math.floor(totalMonths % 12);

  return { years: totalYears, months: remainingMonths };
}

function parseDate(dateStr) {
  // Parse "Month Year" format, e.g., "August 2023"
  const months = {
    january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
    july: 6, august: 7, september: 8, october: 9, november: 10, december: 11
  };

  const parts = dateStr.toLowerCase().split(' ');
  if (parts.length === 2) {
    const month = months[parts[0]];
    const year = parseInt(parts[1], 10);
    if (month !== undefined && !isNaN(year)) {
      return new Date(year, month);
    }
  }
  return null;
}
