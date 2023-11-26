function getCurrentDayAndTime() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
  
    const dayOfWeek = daysOfWeek[now.getDay()];
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
  
    let period = 'AM';
    let hour12Format = hour;
  
    if (hour >= 12) {
      period = 'PM';
      if (hour > 12) {
        hour12Format = hour - 12;
      }
    }
  
    if (hour12Format === 0) {
      hour12Format = 12;
    }
  
    const timeString = `${hour12Format} ${period} : ${minute < 10 ? '0' + minute : minute} : ${second < 10 ? '0' + second : second}`;
  
    console.log(`Today is: ${dayOfWeek}.`);
    console.log(`Current time is: ${timeString}`);
  }
  
  // Call the function to display current day and time
  getCurrentDayAndTime();