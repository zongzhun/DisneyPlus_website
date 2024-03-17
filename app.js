$(document).ready(() => {

    let data = [
        {
            "id": 0,
            "moviename": "洛基 精選系列",
            "imgUrl": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/62E1DD48DCF5702CC6691D427AFA656A2B450CDDCC7E29013FAB60836C373508/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
            "id": 1,
            "moviename": "黑豹",
            "imgUrl": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/623E1EE44EEFCAAA3298E63E8517991EAFCA8880D0FE1D77C4260C4E4E232AC6/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
            "id": 2,
            "moviename": "蟻人",
            "imgUrl": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0B71900FDD19907D8F5A4C0C7728538E43D124977459C8E94CC4A4F3A6557D3D/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
            "id": 3,
            "moviename": "綠巨人",
            "imgUrl": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C7780FB101B09795C826C3468423353C589D49FB461F3771414BDD08312D4C6F/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
            "id": 4,
            "moviename": "奇異博士",
            "imgUrl": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9DB90E08BD0E0F60861AD11F04B7DCA2D623A343CC9ECED123189562B4356968/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
            "id": 5,
            "moviename": "蜘蛛人",
            "imgUrl": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/866217275033D6949F00347519D55E0B690DE4D1BC06FE5252D63F85AE676148/scale?width=1200&aspectRatio=1.78&format=jpeg"
        },
        {
            "id": 6,
            "moviename": "汪達與幻視",
            "imgUrl": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/022D1DD1A8113FAF5DAE21BF17F131E9DFF1931FC82EF4C89A7473274BA13BDA/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
            "id": 7,
            "moviename": "獵鷹與酷寒戰士",
            "imgUrl": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8CA22EBA88F2513AD81D073194A40A83CE7B84EC5D7E9D8547E7AB87DF4E4EAB/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
            "id": 8,
            "moviename": "洛基",
            "imgUrl": "https://i0.wp.com/loory.tw/wp-content/uploads/2023/11/20231112032226_34.jpg"
        },
        {
            "id": 9,
            "moviename": "黑寡婦",
            "imgUrl": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6788708A9C235255E85CA865BA30D39A0D2B2846FDBED6069BE9923F997135AF/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
            "id": 10,
            "moviename": "無限可能:假如...?",
            "imgUrl": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CC4F88378ADEF5DD43C351047BC2122F5E0DDB2F125792D80F5BEA13C96AD1CD/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
            "id": 11,
            "moviename": "尚氣",
            "imgUrl": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CA3AD09FA6F7255FE7BE002E297C0E6076C384906C2E78416EFDDEAF0A9AEF23/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
            "id": 12,
            "moviename": "永恆族",
            "imgUrl": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/284512FA4C674CAE5E510943CF35222FCF00A20FAC7467FCA485E88B171C9345/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
            "id": 13,
            "moviename": "鷹眼",
            "imgUrl": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F65F8D600B63A0549872C6E9E05EA2ECC1590AD13EF2459928C968A8C306B738/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
            "id": 14,
            "moviename": "月光騎士",
            "imgUrl": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4CB51233A2BE8B18AB6D44F0C05AB08C45795DEC8EDA8936DE51596C1417946A/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
            "id": 15,
            "moviename": "蜘蛛人1",
            "imgUrl": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/81385B561624FA3C4137F46ECB24CB42FE70E7410D8CE238CA74EA2A7298264F/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
            "id": 16,
            "moviename": "蜘蛛人2",
            "imgUrl": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1364F4BFFF864FE11899E605C0D624BE9384F5877196453A958B03BEB9754E7C/scale?width=506&amp;aspectRatio=2.00&amp;format=webp"
        },
        {
            "id": 17,
            "moviename": "蜘蛛人3",
            "imgUrl": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9CD7F2654F85FD2E076E2CD95EA9A72683DF0323C4FC3F2CE153714011F570AF/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
            "id": 18,
            "moviename": "蜘蛛人:驚奇再起2",
            "imgUrl": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4685D5220B352F79BF4DA079CE51A6A4A3B8D7FFE4B2DD60B985D253B52D7714/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
            "id": 19,
            "moviename": "美國隊長3:英雄內戰",
            "imgUrl": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0A77DDFDFE4A7E5FE4B0EB3DC4EF7A3A25227F1C55556AA5E1D235F8FA39A4F3/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
            "id": 20,
            "moviename": "復仇者聯盟:無限之戰",
            "imgUrl": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F3D8B9A561A3569619E68925BBB242B68D331C8BD3545352408F88C7D885C582/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
            "id": 21,
            "moviename": "復仇者聯盟:終局之戰",
            "imgUrl": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F0AF52EE1FB18561960CCE4DB6FB4770E845D3FE9212F7E5B156C9E302EFD1EA/scale?width=1200&aspectRatio=1.78&format=webp"
        },
        {
            "id": 22,
            "moviename": "蜘蛛人:離家日",
            "imgUrl": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7791A92CA30EF9F51223B11EF62661ED67689005008D16B1876A97AE80964444/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp"
        },
        {
            "id": 23,
            "moviename": "蜘蛛人:無家日",
            "imgUrl": "https://media.zenfs.com/en/innews_com_tw_7/cb30a8686ed5dd643448f61f068f7657"
        }
    ]

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel({
        item: 6,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    $('.movies_slide').owlCarousel({
        item: 2,
        dots: false,
        nav: true,
        navText: navText,
        margin: 25,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    function displayMovies(movies) {
        const moviesList = document.getElementById('movies-list');
        moviesList.innerHTML = ''; //清空列表，以便重新渲染

        movies.forEach(item => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie-display');
            movieElement.innerHTML = `
                 <img src="${item.imgUrl}" alt="${item.moviename}" style="width:18%; height:auto;">
            `;
            moviesList.appendChild(movieElement);
        });
    }

    $('#search').on("click", function() {
        displayMovies(data);
    });

    $('#search').on("keyup", function() {
        const searchText = $(this).val().toLowerCase();
        
        const filteredMovies = data.filter(item => item.moviename.toLowerCase().includes(searchText));
        displayMovies(filteredMovies);
    });

    // Dynamically set data-title attribute for each movie-item
    // $('.movie_item img').each(function() {
    //     var imageAlt = $(this).attr('alt'); // Get the alt text of the image
    //     $(this).closest('.movie_item').attr('data-title', imageAlt); // Set the data-title attribute to the alt text
    // })

    // $('#search').on("keyup", function(){
    //     var value = $(this).val().toLowerCase();
    
    //     $(".movie_item").filter(function(){
    //         $(this).toggle($(this).attr('data-title').toLowerCase().indexOf(value) > -1);
    //     });
    // });
})


