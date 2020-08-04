export default function convertHoursToMinutes(time: string): number {
  const [hour, minutes] = time.split(':').map(Number);
  const hoursToMinutes = hour * 60;
  const timeInMinutes = hoursToMinutes + minutes;

  return timeInMinutes;
}
