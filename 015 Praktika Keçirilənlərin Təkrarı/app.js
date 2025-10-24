//? Praktika


//? 1
//todo   Consolda Hello World yazın :)

// console.log("Hello World");

//? 2
//todo   Bir dəyişən təyin edin. Dəyəri istənilən tipdə ola bilər. Sonradan o dəyişənin dəyərini təyinat operatorlarından istifadə edərək dəyişdirməyə çalışın. Lakin elə edin ki, o dəyəri sonradan dəyişdirmək istədiyimizdə bizə error qayıtsın.

// const a = 10;
// a += 12;
// console.log(a)

//? 3
//todo   Bir dəyişən təyin edin. Dəyəri istənilən tipdə ola bilər. Sonradan o dəyişənin dəyərini təyinat operatorlarından istifadə edərək dəyişdirməyə çalışın. Lakin elə edin ki, o dəyəri sonradan dəyişdirmək mümkün olsun.

// let b = 13;
// b *= 2;
// console.log(b);


//? 4
//todo   Bir dəyişən təyin edin. Dəyər Boolean tipində olsun. Lakin elə edin ki, o dəyişəni özündən əvvəl çağıranda error verməsin.

// console.log(b);
// var b = true;

//? 5
//todo   Bir dəyişən təyin edin və string dəyər verin. Bu dəyəri Numberə çevirin, lakin elə edin ki, Numberə çevirdikdə NaN cavabı çıxsın.

// let c = Number("Hello");
// console.log(c);


//? 6
//todo   camelCase ilə bir insan adı saxlayan dəyişən təyin edin. Daha sonra isə onu alert ilə ekranda göstərin.

// let firstName = "Rcode";
// alert(firstName);


//? 7
//todo   confirm ilə sual verin (Siz tələbəsiz?). Sonra isə gələn cavabı dəyişəndə tutun. Daha sonra gələn cavabın hansı tipdə olduğunu və özünü consola yazdırın.

// let res = confirm("Siz Telebesiz?");
// console.log(typeof res);
// console.log(res);

//? 8
//todo   3 dəyişən təyin edin. Sırası ilə bu dəyişənlərə 20, 30, 40 dəyərlərini mənimsədin. Məntiq operatorlarından və müqayisə operatorlarından istifadə edərək müxtəlif kombinasiyalar qurun. Bu kombinasiyaları consolda yazdırın. 3 formada kombinasiya qurmağınızı istəyirəm. Elə edin ki, bu kombinasiyanın birincidə ümumi cavab true çıxsın, ikincidə false çıxsın, 3-cü də isə true çıxsın.

// let a = 20;
// let b = 30;
// let c = 40;

// let res_1 = (a === "20" || b < 120) && c > 12;
// console.log(res_1)


// let res_2 = (a == "123" && b > 1) || c === 4;
// console.log(res_2)


// let res_3 = (a > 43 || b < 120) && c > 12;
// console.log(res_3);


//? 9
//todo   Ekranda bir prompt çıxsın və bir ədəd və ya rəqəm daxil edilməsi istənilsin. Bu promtdan gələn dəyəri bir dəyişəndə tutun. Gələn dəyər string olaraq gələcək, məsələn "24". Tipini dəqiqləşdirmək üçün özünüzdə consolda yazıb baxın. Bunu Number tipinə çevirib 15-ə vurun və consolda göstərin. Consolda yazdıqdan sonra isə alert ilə də ekranda göstərin.

// let res = prompt("Bir reqem ve ya eded daxil edin");
// res = Number(res);
// let total = res + 15;
// console.log(total);
// alert(total)


//? 10
//todo     Ekranda bir prompt çıxsın. Prompda bir ad daxil edilməsi istənilsin. Gələn dəyəri bir dəyişəndə tutun. Bu dəyəri ilk öncə toplama operatorundan istifadə edərək consolda bu formada göstərin: Məsələn (Sizin adınız: Rcode). Sonra isə eyni bu yazılışı Template Literals ilə yazın.

// let firstName = prompt("Adinizi daxil edin");
// let msg = "Sizin adiniz:" + " " + firstName;
// console.log(msg)

// let msg = `Sizin adiniz: ${firstName}`
// console.log(msg)

