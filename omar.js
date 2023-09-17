let tasks = [
  {
    title: "om",
    date: "10/10210",
    isDone: false,
  },
  {
    title: "ossm",
    date: "10/10210",
    isDone: false,
  },
  {
    title: "ss",
    date: "10/10210",
    isDone: false,
  },
];

function gettasksfromstorage() {
  var retivedtasks = JSON.parse(localStorage.getItem("ism"));
  tasks = retivedtasks ?? [];
}
gettasksfromstorage();
all();

function all() {
  document.getElementById("lmorba3").innerHTML = "";
  var index = 0;
  for (t of tasks) {
    let content = `
            <div class="task ${t.isDone ? "done" : ""}">
                    <!-- task info -->
                    <div style="width: 70%;">
                        <h2> ${t.title} </h2>
                        <div>
                        <span><span class="material-symbols-outlined">
                            calendar_month
                            </span></span>
                        <span> ${t.date}</span>
                        </div>
                    </div>
                    <!-- task action -->
                    <div style="width: 20%;display: flex; justify-content: space-between; align-items: center;">
                        <button class="ineed" style="background-color:#808080 ;" onclick=deleteTask(${index})> <span class="material-symbols-outlined" >
                        delete
                        </span></button>
                        <button class="ineed" style="background-color: #008B8B;" onclick="Update(${index})"><span class="material-symbols-outlined" >
                        settings
                        </span> </button>
                        ${
                          t.isDone
                            ? `<button onclick="tamam(${index})" class="ineed" style="background-color: #FF7F50;"><span class="material-symbols-outlined" >
                        close
                        </span></button>`
                            : `<button onclick="tamam(${index})" class="ineed" style="background-color: rgb(227, 154, 27);"><span class="material-symbols-outlined" >
                        done
                        </span></button>`
                        }
                        
                    </div>
    
            </div>`;

    document.getElementById("lmorba3").innerHTML += content;
    index++;
  }
}

document.getElementById("add").addEventListener("click", function () {
  var titleOfMission = prompt(" المرجو ادخال عنوان للمهمة");
  if(titleOfMission==null){
    return
  }
  while(titleOfMission == ""){
    prompt(" الرجاء ادخال العنوان لايجب ادخال قيمة فارغة ")
  }
  // Date object li n7taj
  const date = new Date();

  let currentDay = String(date.getDate()).padStart(2, "0");

  let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

  let currentYear = date.getFullYear();

  // we will display the date as DD-MM-YYYY

  let currentDate = `${currentDay}/${currentMonth}/${currentYear}`;
  let taskobj = {
    title: titleOfMission,
    date: currentDate,
    isDone: false,
  };

  tasks.push(taskobj);
  storage();
  all();
});

function deleteTask(index) {
  let tasktitle = tasks[index];
  let y = confirm("هل حقا تريد مسح هده المهمة ؟" + tasktitle.title);
  if (y) {
    tasks.splice(index, 1);
    storage();

    all();
  }
}

function Update(index) {
  let Uptask = tasks[index];
  var tt = prompt(" هل حقا تريد التعديل على ", Uptask.title);
  

  while(tt==""){
   var pop= prompt("الرجاء ادخال العنوان لايجب تعديل قيمة فارغة ")
   if(pop == ""){
        var mom= prompt("الرجاء ادخال العنوان لايجب تعديل قيمة فارغة ")
        tt=mom
   }else{
    tt=pop
   }
  
    
  }
    Uptask.title = tt;
  
  
  
  storage();

  all();
}

function tamam(index) {
  var t = tasks[index];
  t.isDone = !t.isDone;
  storage();

  all();
}

function storage() {
  var R = JSON.stringify(tasks);
  localStorage.setItem("ism", R);
}
