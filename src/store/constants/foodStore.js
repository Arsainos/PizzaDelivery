import pizzaMargarita from '../../assets/img/margarita.jpg';
import pizzaCheese from '../../assets/img/cheese.jpg';
import pizzaFungi from '../../assets/img/fungi.jpg';
import pizzaSeafood from '../../assets/img/seafood.jpg';
import pizzaPepperoni from '../../assets/img/pepperoni.jpg';

// import bundles
import bundleHighfive from '../../assets/img/highfive.png';
import bundleLongwave from '../../assets/img/longwave.jpg';
import bundleShortwave from '../../assets/img/Shortwave.jpg';

// import alt food
import altNuggets from '../../assets/img/nuggets.jpg';
import altFrench from '../../assets/img/french.jpg';
import altWrap from '../../assets/img/wrap.png';
import altShawarma from '../../assets/img/shawarma.png';
import altDog from '../../assets/img/dog.png';

// import drinks
import drinkCola from '../../assets/img/cola.jpg';
import drinkWater from '../../assets/img/water.jpg';
import drinkDrpepper from '../../assets/img/drpepper.jpg';

export const foodStore = {
    pizzas: [
        {imageSrc: pizzaMargarita, imageAlt:`pizza`, name:`Margaritta`, description:`Proident pariatur commodo culpa reprehenderit.`, price:10}
        ,{imageSrc: pizzaPepperoni, imageAlt:`pizza`, name:`Pepperoni`, description:`Veniam enim aliquip velit dolore fugiat.`, price:15, }
        ,{imageSrc: pizzaFungi, imageAlt:`pizza`, name:`Fungi`, description:`Aute excepteur tempor eu culpa consequat culpa mollit pariatur ut nostrud id duis magna.`, price:12, }
        ,{imageSrc: pizzaCheese, imageAlt:`pizza`, name:`Cheesy cheese`, description:`Laboris consectetur anim dolor voluptate mollit esse.`, price:13, }
        ,{imageSrc: pizzaSeafood, imageAlt:`pizza`, name:`Poseidon`, description:`Ex sint anim nisi minim cupidatat duis.`, price:11, }
    ],
    bundles:  [
        {imageSrc: bundleHighfive, imageAlt:`bundle`, name:`High Five`, list:[`Margaritta`,`Proshuto`,`Fungi`,`Cheesy cheese`,`Four seasons`], description:`Sint voluptate sit do in mollit fugiat veniam et laboris voluptate aute nisi occaecat.`, }
        ,{imageSrc: bundleLongwave, imageAlt:`bundle`, name:`Longwave`, list:[`Margaritta`,`Fungi`, `Four seasons`], description:`Ipsum nulla tempor nostrud aliqua.`, }
        ,{imageSrc: bundleShortwave, imageAlt:`bundle`, name:`Shortwave`, list:[`Margaritta`,`Proshuto`], description:`Occaecat esse ullamco minim eu do adipisicing veniam commodo id.`, }
    ],
    altFoods: [
        {imageSrc: altFrench, imageAlt:`altfood`, name:`French Fries`, description:`Quis in sunt consectetur quis consequat non cillum tempor dolor esse aliqua.`, price:3, }
        ,{imageSrc: altDog, imageAlt:`altfood`, name:`Hot Dog`, description:`Id commodo esse eiusmod sunt duis excepteur sit sint.`, price:4, }
        ,{imageSrc: altNuggets, imageAlt:`altfood`, name:`Nuggets`, description:`Tempor pariatur ex velit nulla magna ad est ipsum elit excepteur deserunt nisi anim occaecat.`, price:4, }
        ,{imageSrc: altShawarma, imageAlt:`altfood`, name:`Shawarma`, description:`Fugiat officia aute in sit ipsum ea ad consequat.`, price:4, }
        ,{imageSrc: altWrap, imageAlt:`altfood`, name:`Wrap`, description:`Pariatur cupidatat est culpa quis reprehenderit consectetur sit duis magna do ex dolor nostrud.`, price:3, }
    ],
    drinks: [
        {imageSrc: drinkCola, imageAlt:`drink`, name:`Coca-cola`, description:`Cillum adipisicing eiusmod cupidatat velit velit laborum anim amet cillum elit nostrud cillum.`, price:1, }
        ,{imageSrc: drinkWater, imageAlt:`drink`, name:`Mineral Water`, description:`Do reprehenderit reprehenderit incididunt commodo quis.`, price:1, }
        ,{imageSrc: drinkDrpepper, imageAlt:`drink`, name:`Dr Pepper`, description:`Laborum in excepteur consequat mollit consequat reprehenderit excepteur elit labore cillum commodo aliquip ea ut.`, price:2, }   
    ]
};