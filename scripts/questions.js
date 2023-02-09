// Block with QA

let intervalId;

document.querySelectorAll('.qa-block__btn').forEach(e => {
    e.addEventListener('click', e => {
        const answer = e.currentTarget.dataset.path;
        document.querySelectorAll('.qa-block__answer').forEach(e => {
            if (!document.querySelector(`[data-target=${answer}]`).classList.contains('open')) {
                e.classList.remove('qa-block__answer_active');
                e.classList.remove('open');
                document.querySelector(`[data-target=${answer}]`).classList.add('qa-block__answer_active');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${answer}]`).classList.add('open');
                }, 0);
            }

            if (document.querySelector(`[data-target=${answer}]`).classList.contains('open')) {
                clearTimeout(intervalId);
                document.querySelector(`[data-target=${answer}]`).classList.remove('qa-block__answer_active');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${answer}]`).classList.remove('open');
                }, 0);
            }

            window.onclick = e => {
                if (e.target == document.querySelector(`[data-target=${answer}]`) || e.target == document.querySelector(`[data-path=${answer}]`)) {
                    return;
                } else {
                    document.querySelector(`[data-target=${answer}]`).classList.remove('qa-block__answer_active');
                    document.querySelector(`[data-target=${answer}]`).classList.remove('open');
                }
            }
        });
    });
});