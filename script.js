document.addEventListener("DOMContentLoaded", function () {
    // Function to update the time and countdown
    function updateTime() {
        // Get the current date and time
        const now = new Date();

        // Get the day of the week
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDayOfWeek = daysOfWeek[now.getUTCDay()];

        // Get the current month
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const currentMonth = monthNames[now.getUTCMonth()];

        // Get the current day of the month
        const currentDayOfMonth = now.getUTCDate();

        // Get the current year
        const currentYear = now.getUTCFullYear();

        // Get the current hour in 12-hour format
        let currentHour = now.getUTCHours();
        const ampm = currentHour >= 12 ? 'PM' : 'AM';
        currentHour = currentHour % 12 || 12; // Convert midnight (0) to 12


        // Get the current minutes and seconds
        const currentMinutes = now.getUTCMinutes();
        const currentSeconds = now.getUTCSeconds();

        // Display the date and time information
        document.querySelector('[data-testid="currentDayOfWeek"]').textContent = currentDayOfWeek;
        document.querySelector('[data-testid="currentMonth"]').textContent = currentMonth;
        document.querySelector('[data-testid="currentDayOfMonth"]').textContent = currentDayOfMonth;
        document.querySelector('[data-testid="currentYear"]').textContent = currentYear;
        document.querySelector('[data-testid="utcHours"]').textContent = `${currentHour}`;
        document.querySelector('[data-testid="utcMinutes"]').textContent = `${String(currentMinutes).padStart(2, '0')}`;
        document.querySelector('[data-testid="utcSeconds"]').textContent = `${String(currentSeconds).padStart(2, '0')}`;
        document.querySelector('[data-testid="ampm"]').textContent = `${ampm}`;
        document.querySelector('[data-testid="currentUTCTime"]').textContent = `UTC: ${now.getTime()}ms`;

        // Update every second
        setTimeout(updateTime, 1000);
    }

    // Initial update
    updateTime();
});
