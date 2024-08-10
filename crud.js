let closebtn = document.getElementById("closebtn");
let openbtn = document.getElementById("openbtn");
let list = document.getElementById("list");
openbtn.onclick = function () {
  list.classList.remove("hide");
  openbtn.classList.add("hide");
};
closebtn.onclick = function () {
  list.classList.add("hide");
  openbtn.classList.remove("hide");
};

document.addEventListener("DOMContentLoaded", function () {
  let AddData = document.getElementById("AddData");
  let SearchData = document.getElementById("SearchData");
  let UbdataDelete = document.getElementById("UbdataDelete");
  let ReadData = document.getElementById("ReadData");
  let FullMode = document.getElementById("FullMode");

  //   let deletebtn = document.getElementById("delete");
  //   let ubdatebtn = document.getElementById("ubdate");

  let deleteAllRecords = document.getElementById("deleteAllRecords");
  let inputBox = document.getElementById("inputBox");
  let searchBox = document.getElementById("searchBox");
  let table = document.getElementById("table");
  AddData.addEventListener("click", function () {
    searchBox.style.display = "none";
    // deletebtn.style.display = "none";
    // ubdatebtn.style.display = "none";
    deleteAllRecords.style.display = "none";
    table.style.display = "block";
    inputBox.style.display = "block";
    table.style.width = "100%";
    document.getElementById("tbody").style.width = "100%";
  });

  SearchData.addEventListener("click", function () {
    searchBox.style.display = "block";
    // deletebtn.style.display = "none";
    // ubdatebtn.style.display = "none";
    deleteAllRecords.style.display = "none";
    table.style.display = "block";
    inputBox.style.display = "none";
  });

  ReadData.addEventListener("click", function () {
    searchBox.style.display = "none";
    // deletebtn.style.display = "none";
    // ubdatebtn.style.display = "none";
    deleteAllRecords.style.display = "none";
    table.style.display = "block";
    inputBox.style.display = "none";
  });

  FullMode.addEventListener("click", function () {
    searchBox.style.display = "block";
    // deletebtn.style.display = "block";
    // ubdatebtn.style.display = "block";
    deleteAllRecords.style.display = "block";
    table.style.display = "block";
    inputBox.style.display = "block";
  });
});

let logOut = document.getElementById("logOut");
let login = document.getElementById("logIn");
logOut.style.display = "none";
logOut.onclick = function () {
  document.getElementById("profileImage").src =
    "images/blank-profile-picture-973460_640.png";
  document.getElementById("profileName").innerHTML = " Manasys User";
  logOut.style.display = "none";
  login.style.display = "block";
};
login.onclick = function () {
  login.href = "Login.html";

  document.getElementById("profileImage").src = "images/img1.jpeg";
  document.getElementById("profileName").innerHTML = " Mohammed dhedy";
  login.style.display = "none";
  logOut.style.display = "block";
};

let title = document.getElementById("title");
let price = document.getElementById("price");
let tax = document.getElementById("tax");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let create = document.getElementById("create");

let mood = "create"; //بستعمله عشان اميز بين وضع الانشاء ووضع التعدييل وافتراضيا لما اعمل ريلود بكون انشاء واذا كبست على ابديت بكون ابديت

let searchMood = "title";

let temp; //بستعمله عشان اخزن قيمة الاندكس الي بوصل الفنكشن ابديت لما اكبس على ابديت لعنصر معين وبسمحلي اوصل للاندكس بالفنكشن تاعت اون كليك عشان داخله اعدل على الاوبجكت الي بالاندكس هاض وارجع كلشي زي مكان
function geTotal() {
  //الفنكشن هاي بتشتغل اذا كتبت داخل اي واحد من تاعوت السعر بس في واحد منهن اجباري
  // اكتبه وهو السعر فانا عملت شرط للفنكشن عشان تشتغل انه يكون البرايس مش فاضي واذا فاضي يخلي اللون
  //  زي مهو واذا اشتغل وكان مش فاضي بصير اخضر
  if (price.value != "") {
    price.style.border = "solid 1px rgba(255, 255, 255, 0.355)";
    total.innerHTML = +price.value + +tax.value + +ads.value - +discount.value;
    total.style.backgroundColor = "green";
  } else {
    total.innerHTML = "";
    total.style.backgroundColor = "blueviolet";
  }
}

// let products = [];//اذا عملتها هيك فكل مرا بعمل ريلود للصفحة رح يخلي المصفوفة فاضية ويضيف فيها العنصر الي انا بضيفه اخر اشي تحت ورح يروح على اللوكال ستوراج يعمل اوفر رايد فوق المصفوفة القديمة وهيك
// رح تنحذف كل العناصر الموجودة عندي باللوكال ستوراج ويضل عندي بس الاوبجكت الي انا ضفته اخر اشي بعد ما المصفوفة صارت فاضية

//الحل كالتي :::::
/*
                الحل يكمن في اني  انشء المتغير وبعدها افحص اللوكال ستوراج اذا اذا الكيي فيها لا يساوي نل يعني فيه بيانات فانا بخلي المتغير يؤشر على المصفوفة 
                الي مخزن باللوكال ستوراج واذا كان فاضي وفش مصفوفة عند الكيي يعني فاضي فش عناصر ويساوي نل فهو بنشء مصفوفة جديدة

                */
let dataproducts;
if (localStorage.product != null) {
  dataproducts = JSON.parse(localStorage.product); //لانه بتتخزن كسترينج ولازم احولها لمصفوفة عشان اقدر اضيف عليها
  //   هاي المرحلة بوصلها لما يكون في عندي عناصر اصلا وضايف عالاقل عنصر واحد بالمصفوفة
} else {
  dataproducts = [];
}

create.onclick = () => {
  /*
                    لما اضغط على الزر فهو رح ينشئ اوبجكت بالبيانات الي اجتني ويخزن الاوبجكت هاد بمصفوفة عشان 
                    اصير اقدر اوصل للعناصر من خلال المصفوفة واعمل لوب عليهن واجيبهن بالترتيب والحكي هاض 
                    يعني رح يكون عندي مصفوفة تحتوي على اوبجكتس وكل اوبجكت بمثل برودكت انا بضيفو
                    */
  let obj = {
    title: title.value.toLowerCase(),
    price: price.value,
    tax: tax.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML, //لانها مش انبت
    count: count.value,
    category: category.value.toLowerCase(),
  };
  if (title.value != "" && price.value != "") {
    if (mood === "create") {
      dataproducts.push(obj);
    } else {
      //if its ubdate
      dataproducts[temp] = obj; //الاوبجكت هاد بحتوي على القيم الي بالانبوت والي عدلتهن بعد ما ضغطت على تعديل لعنصر معين
      create.innerHTML = "create";
      mood = "create";
      //   count.style.display = "block";
      create.style.backgroundImage =
        "linear-gradient(to right, rgb(28, 27, 27), blueviolet)";
      document.getElementsByTagName("input")[0].style.border =
        "solid 1px rgba(255, 255, 255, 0.355)";
    }
    title.style.border = "solid 1px rgba(255, 255, 255, 0.355)";
  } else {
    alert(
      "title or price feilds cannot be empty :( \n if you dont want to put the price at the right time try to put its value as 0"
    );
    title.style.border = "solid 2px red";
    price.style.border = "solid 2px red";
  }

  localStorage.setItem("product", JSON.stringify(dataproducts));
  readDataToOutPut(); //انا بحكيله هون انو كل ما اضيف عنصر على الاراي اجي انادي الفنكشن الي بتطبع الاراي بالتيبل وبرضو الفنكشن لما اعمل ريلود للصفحة بتشتغل لحالها عشان ما اضطر انشئ ريكورد عشان تعرضهن
  clearFeilds();
  geTotal(); //اذا كانت ابديت عدلي العنصر ونادي الجيت توتال عشان ترجعها للونها الاصلي وشكلها الاصلية وما تضل لونها اخضر لانه الفنكشن هاي بتفحص اذا البرايس فاضيي بتخلي اللون زي مهو وطبعا رح يكون فاضي لانه بعد ما
};

function clearFeilds() {
  title.value = "";
  price.value = "";
  tax.value = "";
  ads.value = "";
  total.innerHTML = "";
  count.value = "";
  category.value = "";
  discount.value = "";
}

function readDataToOutPut() {
  let table = ""; //بخزن داخله كل الريكوردس باللوب وبعدها بضيفه بالتي بودي
  //وبجيب الريكورس مباشرة من الاراي لانها هي تلقائيا تحتوي عكل البيانات الي الي عندي
  for (let i = 0; i < dataproducts.length; i++) {
    table += `
                    <tr>
                            <td>${i}</td>
                            <td>${dataproducts[i].title}</td>
                            <td>${dataproducts[i].price}</td>
                            <td>${dataproducts[i].tax}</td>
                            <td>${dataproducts[i].ads}</td>
                            <td>${dataproducts[i].discount}</td>
                            <td>${dataproducts[i].total}</td>
                            <td>${dataproducts[i].count}</td>
                            <td>${dataproducts[i].category}</td>
                            <td><button onclick='udateRecord(${i})' id="ubdate">تعديل</button></td>
                            <td><button onclick='deleteRecord(${i})' id="delete">حذف</button></td>
                    </tr>
                    `;
  }
  document.getElementById("tbody").innerHTML = table;
  let deleteAllRecords = document.getElementById("deleteAllRecords");
  if (dataproducts.length > 0) {
    deleteAllRecords.innerHTML = `<button onclick='removeRecords()' > حذف جميع البيانات(${dataproducts.length})</button>`;
  } else {
    deleteAllRecords.innerHTML = "";
  } //هاد الكود حطيتو هون داخل هاي الفنكشن لانه هاي الفنكشن بتشتغل كل ما اعمل انشاء لريكورد وكل ما احذف ريكورد وكل ما اعمل ابديت وكل ما اعمل ريلود للصفحة
  //   لهيك حطيتو هون عشان كل ما اعمل اي عملية بالموقع سواء حذف او اضافة يقرا الكود هاد عشان بعرف وينتا يظهر البتن ووينتا يخفيه
}

 
// if (dataproducts.length > 0) {
//   deleteAllRecords.innerHTML = `<button onclick='removeRecords()' >delete All records</button>`;
// } else {
//   deleteAllRecords.innerHTML = "";
// } لو خليته هون فهو رح يناديه ويشغله كل ما اعمل ريلود للصفحة فلو كانت الاراي فاضية ما رح يظهر ولو بعدها ضفت عناصر لازم اعمل ريلود عشان يقرا الكود مرا ثانية
readDataToOutPut();

function deleteRecord(index) {
  if (dataproducts[index].count > 1) {
    dataproducts[index].count -= 1;
  } else {
    dataproducts.splice(index, 1);
    localStorage.setItem("product", JSON.stringify(dataproducts));
  }
  readDataToOutPut(); //نفس مبدا العرض عند الاضافة هون ،, انا بحذف عنصر وبعد ما احذفه مباشرة روح ناديلي الفنكشن الي بتعرض  عشان يطبعلي التيبل مباشرة بعد التعديل
}

//بعد ما احذف عنصر او اضيف عنصر بطبع النسخة المحدثة من الاراي

function removeRecords() {
  localStorage.clear();
  dataproducts.splice(0);
  readDataToOutPut(); //عشان يفضيها بعد ما يمسح كلشي
  //وبرضو عشان يخفي الزر تاع الديليت كل الريكوردس
  //  وبرضو عشان بعد ما يمسح كلشي يرد يطبعها فاضية ويرجع يفحص الشرط كمان مرا عشان يعرف اذا يظهر الزر
}
function udateRecord(i) {
  temp = i;
  create.innerHTML = "تعديل العنصر";
  //   count.style.display = "none";
  title.value = dataproducts[i].title;
  price.value = dataproducts[i].price;
  tax.value = dataproducts[i].tax;
  ads.value = dataproducts[i].ads;
  discount.value = dataproducts[i].discount;
  category.value = dataproducts[i].category;
  count.value = dataproducts[i].count;
  scroll({
    top: 0,
    behavior: "smooth",
  });
  create.style.backgroundImage =
    "linear-gradient(to right, rgb(28, 27, 27), green)";
  document.getElementsByTagName("input")[0].style.border = "solid 3px green";
  mood = "ubdate";
  geTotal(); //لانه الفنكشن هاي عاملها تشتغل اون كيي اب داخل الانبوت بس انا هون جبت البيانات مباشرة داخل الانبوت فهي ما رح تشتغل لهيك بناديها هون عشان تشتغل
}

function OptainSearchMood(id) {
  let search = document.getElementById("search");
  search.value = "";
  if (id === "searchTitle") {
    searchMood = "title";
  } else {
    searchMood = "category";
  }
  search.placeholder = "search by " + searchMood;
}
function searchData(value) {
  let table = "";
  for (let i = 0; i < dataproducts.length; i++) {
    if (searchMood == "title") {
      if (dataproducts[i].title.includes(value.toLowerCase())) {
        table += `
                        <tr>
                            <td>${i}</td>
                            <td>${dataproducts[i].title}</td>
                            <td>${dataproducts[i].price}</td>
                            <td>${dataproducts[i].tax}</td>
                            <td>${dataproducts[i].ads}</td>
                            <td>${dataproducts[i].discount}</td>
                            <td>${dataproducts[i].total}</td>
                            <td>${dataproducts[i].count}</td>
                            <td>${dataproducts[i].category}</td>
                            <td><button onclick='udateRecord(${i})' id="ubdate">تعديل</button></td>
                            <td><button onclick='deleteRecord(${i})' id="delete">حذف</button></td>
                    </tr>
                    `;
      }
    } else {
      if (dataproducts[i].category.includes(value.toLowerCase())) {
        table += `
                        <tr>
                                <td>${i}</td>
                                <td>${dataproducts[i].title}</td>
                                <td>${dataproducts[i].price}</td>
                                <td>${dataproducts[i].tax}</td>
                                <td>${dataproducts[i].ads}</td>
                                <td>${dataproducts[i].discount}</td>
                                <td>${dataproducts[i].total}</td>
                                <td>${dataproducts[i].count}</td>
                                <td>${dataproducts[i].category}</td>
                                <td><button onclick='udateRecord(${i})' id="ubdate">تعديل</button></td>
                                <td><button onclick='deleteRecord(${i})' id="delete">حذف</button></td>
                        </tr>
                    `;
      }
    }
  }

  document.getElementById("tbody").innerHTML = table;
}

/*
                MAP :
                1-get total
                2-create product 
                3-save to local storage 
                4-clear inputs after each creation 
                5-read date into the output 
                6-count field to create a number of elements 
                7-delete button 
                8-ubdate button 
                9-search property
                10-clean data from local Storage
                */

//light and dark mode code

let themeLight = document.getElementById("themeLight");
let themeDark = document.getElementById("themeDark");
themeDark.classList.add("hide");
themeLight.addEventListener("click", function () {
  themeLight.classList.add("hide");
  themeDark.classList.remove("hide");
  document.body.style.backgroundColor = "white";
  list.style.backgroundColor = "rgba(17, 15, 15,0.600)";
  document.getElementById("Pagetitle").style.color = "blueviolet";
  openbtn.style.color = "blueviolet";
  document.getElementById("header").style.color = "blueviolet";
});

themeDark.addEventListener("click", function () {
  themeLight.classList.remove("hide");
  themeDark.classList.add("hide");
  document.body.style.backgroundColor = "rgb(17, 15, 15)";
  list.style.backgroundColor = "rgba(224, 6, 248, 0.116)";
  document.getElementById("Pagetitle").style.color = "white";
  openbtn.style.color = "white";
  document.getElementById("header").style.color = "white";
});

// let ThemeMood = "dark";
// let theme = document.getElementById("theme");
// theme.addEventListener("click", function () {
//   if (ThemeMood == "dark") {
//     ThemeMood = "light";
//     theme.innerHTML = "dark mood";
//   } else {
//     ThemeMood = "dark";
//     theme.innerHTML = "light mood";
//   }
//   if (ThemeMood == "light") {
//     document.body.style.backgroundColor = "white";
//     list.style.backgroundColor = "rgba(17, 15, 15,0.600)";
//     theme.style.backgroundColor='#2e2c2b';
//     theme.style.color='white';
//   } else {
//     document.body.style.backgroundColor = "rgb(17, 15, 15)";
//     list.style.backgroundColor = "rgba(224, 6, 248, 0.116)";
//     theme.style.backgroundColor='white';
//     theme.style.color='black';
//   }
// });
