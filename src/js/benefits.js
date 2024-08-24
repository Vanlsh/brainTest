function animateNumbers() {
  const statNumbers = document.querySelectorAll('.stat-number');
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetNumber = parseFloat(
          entry.target.getAttribute('data-target')
        );
        const increment =
          targetNumber < 10 ? 0.1 : Math.ceil(targetNumber / 100);
        let currentNumber = 0;

        const formatNumberWithSpaces = number => {
          return number.toLocaleString('en').replace(/,/g, ' ');
        };

        const updateNumber = () => {
          currentNumber += increment;
          if (currentNumber >= targetNumber) {
            entry.target.textContent = formatNumberWithSpaces(
              targetNumber % 1 === 0 ? targetNumber : targetNumber.toFixed(1)
            );
            return;
          }
          entry.target.textContent = formatNumberWithSpaces(
            currentNumber % 1 === 0
              ? Math.floor(currentNumber)
              : currentNumber.toFixed(1)
          );
          requestAnimationFrame(updateNumber);
        };

        updateNumber();
        observer.unobserve(entry.target); // Припинити спостереження після завершення анімації
      }
    });
  }, observerOptions);

  statNumbers.forEach(number => {
    observer.observe(number);
  });
}

// Виконати функцію, коли DOM повністю завантажений
document.addEventListener('DOMContentLoaded', animateNumbers);
