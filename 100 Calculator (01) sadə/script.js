//! Praktika Calculator (01) sadə


//! Aşağıdakı mətni mütləq oxuyun

//? Kodları silin və sıfırdan özünüz yazın. Yazarkən yadınıza salmağa çalışmayın ki, müəllim burada necə yazmışdı. Tam əksinə, məntiq irəli sürün, gedişatı anlayın. Nəyi niyə yazdığınızı araşdırın.
//! Mütləq şəkildə uzun zaman ayırın. 20-30 dəqiqəyə yazmağa çalışmayın. Rahat şəkildə bir neçə saat düşünün, işləyin üzərində. Unutmayın, bu praktikada məqsəd bildiklərinizi və keçilənləri möhkəmləndirməkdir. Təbii ki, əzbərləməyin heç bir faydası olmayacaq.
//? Uğurlar! İnanıram ki, öhdəsindən gələcəksən. Yolun sonlarındayıq və bu bizim 100-cü dərsimizdir. 👍👍👍




const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            display.value = ""

        } else if (value === "D") {
            alert("homework")

        } else if (value === "=") {
            const expression = display.value;

            try {

                if (/\/0(?!\d)/.test(expression)) {
                    throw new Error("0-a bolme yoxdur")
                }

                const result = math.evaluate(expression);

                display.value = result;

            } catch (error) {
                if (error.message === "0-a bolme yoxdur") {
                    display.value = error.message
                } else {
                    display.value = "Error"
                }
            }

        } else {
            display.value += value;
        }
    })
})