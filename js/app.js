const courses = [
  {
    id: 1,
    title: "زیر و بَم و منطق دیپلوی برای برنامه نویسان JS",
    desc: "تو هر فیلدی فعالیت بکنی برای پرزنت خودت تو بازار کار و نمایش نمونه کارات نیاز به دپلوی داری. تو…",
    teacher: "محمدامین سعیدی راد",
    students: 452,
    price: 700_000,
    src: "images/image01.webp",
  },
  {
    id: 2,
    title: "تجربیات طلایی من در کار تیمی",
    desc: "در ساده ترین حالت شما اگه تو یک شرکت برنامه نویسی استخدام بشین، وارد تیم اون شرکت میشین و باید…",
    teacher: "محمدامین سعیدی راد",
    students: 343,
    price: 375,
    src: "images/image02.webp",
  },
  {
    id: 3,
    title: "آموزش ۲۰ کتابخانه کاربردی ReactJS برای بازارکار",
    desc: "کتابخانه‌ها باعث افزایش سرعت کدنویسی میشن. در حدی که تو بازار کار هم از کتابخانه های مختلفی برای توسعه پروژه‌ها…",
    teacher: "محمدامین سعیدی راد",
    students: 1505,
    price: 570_000,
    src: "images/image03.webp",
  },
  {
    id: 4,
    title: "آموزش تخصصی Redux مقدماتی تا پیشرفته",
    desc: "ریداکس یه کتابخونه پراستفاده واسه مدیریت حالت های مختلف یه برنامه جاوا اسکریپتیه که تو بازار کار ری‌اکت یکی از…",
    teacher: "محمدامین سعیدی راد",
    students: 1463,
    price: 1_400_000,
    src: "images/image04.webp",
  },
  {
    id: 5,
    title: "آموزش Next.js بصورت پروژه محور",
    desc: "نکست یه فریمورک مبتنی بر ری‌اکت هست که امروزه تو بازار کار یکی از مهم‌ترین تکنولوژی‌ها برای توسعه دهنده های…",
    teacher: "محمدامین سعیدی راد",
    students: 1641,
    price: 3_500_000,
    src: "images/image05.webp",
  },
  {
    id: 6,
    title: "پروژه های تخصصی با جاوا اسکریپت برای بازار کار",
    desc: "هیچ فرقی نمیکنه شما با چه کتابخونه یا فریمورکی کار میکنین. تو این دوره یاد میگیری به عنوان یه برنامه…",
    teacher: "محمدامین سعیدی راد",
    students: 1404,
    price: 1_950_000,
    src: "images/image06.webp",
  },
  {
    id: 7,
    title: "آموزش PWA بصورت پروژه محور",
    desc: "کلمه PWA مخفف Progressive Web App بوده و یه تکنولوژی تقریبا جدیده که میتونیم بهمون اجازه میده وب‌سایتی که توسعه…",
    teacher: "محمدامین سعیدی راد",
    students: 581,
    price: 1_710_000,
    src: "images/image07.webp",
  },
  {
    id: 8,
    title: "آموزش 20 کتابخانه جاوااسکریپت برای بازار کار",
    desc: "امروزه کتابخانه‌ها کد نویسی را خیلی آسان و لذت بخش تر کرده اند. به قدری که حتی امروزه هیچ شرکت…",
    teacher: "محمدامین سعیدی راد",
    students: 1403,
    price: 693_000,
    src: "images/image08.webp",
  },
  {
    id: 9,
    title: "بررسی تخصصی سوالات مصاحبه‌ای JS",
    desc: "تو این دوره انواع مصاحبه، سوالات پرتکرار هر نوع مصاحبه، نحوه آماده شدن برای مصاحبه و ... برای شما عزیزان…",
    teacher: "محمدامین سعیدی راد",
    students: 155,
    price: 830_000,
    src: "images/image09.webp",
  },
  {
    id: 10,
    title: "آموزش Canvas برای برنامه نویسان فرانت‌اند",
    desc: "Canvas عمدتا برای پیاده سازی و رسم نمودار های مختلف جهت تحلیل اطلاعات، بک‌گراندها و افکت های متنی انیمیشنی، شکل…",
    teacher: "محمدامین سعیدی راد",
    students: 584,
    price: 442_500,
    src: "images/image10.webp",
  },
  {
    id: 11,
    title:
      "آموزش ری اکت ( ReactJS ) در دنیای واقعی | از 0 تا استخدام [منتورشیپ]",
    desc: "حدود 99 ساعت آموزش جامع و تخصصی ری اکت!  شما در دوره آموزش ری اکت ReactJS ، این کتابخانه قدرتمند…",
    teacher: "محمدامین سعیدی راد",
    students: 2039,
    price: 4_800_000,
    src: "images/image11.webp",
  },
  {
    id: 12,
    title: "آموزش جاوا اسکریپت رایگان مقدماتی تا پیشرفته + مینی پروژه",
    desc: "آموزش جاوا اسکریپت برای تمامی افرادی ک قصد ورود به زبان برنامه نویسی دارند مناسب می باشد . خصوصا برای…",
    teacher: "محمدامین سعیدی راد",
    students: 72055,
    price: 4_000_000,
    src: "images/js-expert.jpg",
  },
  
];

const coursesContainer = document.querySelector('.container');
const paginationContainer = document.querySelector('.pagination-items');



let currentPage = 1
let coursersPerPage = 4

function showPageCourses() {
  let startIndex = (currentPage - 1) * coursersPerPage;
  let lastIndex = startIndex + coursersPerPage
  let shownCourses = courses.slice(startIndex, lastIndex)
  
  coursesContainer.innerHTML = ""

  shownCourses.forEach(shownCourse => {

    coursesContainer.insertAdjacentHTML(
      'beforeend',
      `
        <article class="product">
          <header>
            <img src="${shownCourse.src}" alt="">
          </header>
          <main class="product-body">
            <a href="#">
              <h2>${shownCourse.title}</h2>
            </a>
            <p class="desc">${shownCourse.desc}</p>

            <div class="details">
              <p class="teacher">${shownCourse.teacher}</p>
            </div>
          </main>
          <footer class="product-footer">
            <div>
              <span> دانشجو: </span>
              <span class="students">${shownCourse.students}</span>
            </div>

            <div>
              <p class="price">${shownCourse.price.toLocaleString()}</p>
            </div>
          </footer>
        </article>

      `
    )
  })

}


function gerneratePagination() {
  let pageCount = Math.ceil(courses.length / coursersPerPage);

  for(let i=1; i<=pageCount; i++) {
    paginationContainer.insertAdjacentHTML(
      'beforeend',
      `
        <li class="page ${i===1? "active" : ""}" onclick="changePageHandler(${i})">${i}</li>

      `
    )
  }

}

gerneratePagination()



function changePageHandler(userSelectedPage) {

  currentPage = userSelectedPage


  const paginationItems = document.querySelectorAll('.page')

  paginationItems.forEach(paginationItem => { 

    if(Number(paginationItem.textContent) === currentPage) {
      paginationItem.className += ' active';
    }else {
      paginationItem.classList.remove('active')
    }
    
  })

  showPageCourses()

}


