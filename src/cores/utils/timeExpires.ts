export class countTime {
  static timedefault = "00";
  static Down(date: Date | null) {
    const endtime = {
      days: this.timedefault,
      hours: this.timedefault,
      minutes: this.timedefault,
      seconds: this.timedefault,
    };
    if (!date) return endtime;
    const miningTime = new Date(date).getTime();
    const now = new Date().getTime();

    if (miningTime < now) return endtime;

    const distance = miningTime - now;

    if (distance < 0) {
      return endtime;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const textDays = Number(days) ? `${days.toString().padStart(2, "0")}` : "";
    const textHours = Number(hours)
      ? `${hours.toString().padStart(2, "0")}`
      : !Number(hours) && Number(days)
      ? this.timedefault
      : this.timedefault;
    const textMinutes = Number(minutes)
      ? `${minutes.toString().padStart(2, "0")}`
      : this.timedefault;
    const textSeconds = Number(seconds)
      ? `${seconds.toString().padStart(2, "0")}`
      : this.timedefault;

    return {
      days: textDays.toString(),
      hours: textHours.toString(),
      minutes: textMinutes.toString(),
      seconds: textSeconds.toString(),
    };
  }
}
