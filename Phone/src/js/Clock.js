function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? '오후' : '오전';

    // 12시간제로 변환
    hours = hours % 12;
    hours = hours ? hours : 12; // 0시를 12로 표시

    const timeString = `${ampm} ${String(hours).padStart(2, '0')}:${minutes}`;
    document.getElementsByClassName("clock")[0].textContent = timeString;
  }

  setInterval(updateClock, 1000);
  updateClock();