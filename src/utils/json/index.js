import React from "react";
import Home from "../../assets/icons/home";
import PageList from "../../assets/icons/pageList";
import Category from "../../assets/icons/category";
import Order from "../../assets/icons/order";
import Wishlist from "../../assets/icons/wishlist";
import Language from "../../assets/icons/language";
import Profile from "../../assets/icons/profile";
import Notification from "../../assets/icons/notification";
import Setting from "../../assets/icons/setting";
import Hindi from "../../assets/icons/hindi";
import Korean from "../../assets/icons/korea";
import Arabic from "../../assets/icons/arabic";
import Discount from "../../assets/icons/discount";
import Offer from "../../assets/icons/offer";
import CurrencyConverter from "../../assets/icons/currencyConverter";
import PassChange from "../../assets/icons/passChange";
import TopUp from "../../assets/icons/topUp";
import { windowHeight, windowWidth } from "../../theme/appConstant";
import Rupees from "../../assets/icons/rupees";
import Dollar from "../../assets/icons/dollar";
import Euro from "../../assets/icons/euro";
import AustralianDollar from "../../assets/icons/australianDollar";
import KoreanWon from "../../assets/icons/koreanWon";

const { default: colors } = require("../../theme/colors");
const { default: Images } = require("../images/images");

module.exports = {
    drawerItems: [
        { name: 'tabBar.home', icons: <Home />, showSwitch: false },
        { name: 'drawer.fastKartPagesList', icons: <PageList />, showSwitch: false },
        { name: 'homepage.shopByCategory', icons: <Category />, showSwitch: false },
        { name: 'drawer.orders', icons: <Order />, showSwitch: false },
        { name: 'drawer.yourWishlist', icons: <Wishlist />, showSwitch: false },
        { name: 'drawer.langauge', icons: <Language />, showSwitch: false },
        { name: 'drawer.yourAccount', icons: <Profile />, showSwitch: false },
        { name: 'drawer.notification', icons: <Notification />, showSwitch: false },
        { name: 'drawer.settings', icons: <Setting />, showSwitch: false },
        { name: 'drawer.currencyConverter', icons: <CurrencyConverter />, showSwitch: false },
    ],
    swiperData: [
        { title: 'homepage.farmFreshVegies', subTitle: 'homepage.getInstantDelivery', shopNow: 'homepage.shopNow', image: Images.banner1 },
        { title: 'homepage.farmFreshVegies', subTitle: 'homepage.getInstantDelivery', shopNow: 'homepage.shopNow', image: Images.banner2 },
    ],
    recentlyBrought: [
        { image: Images.recentBought1 },
        { image: Images.recentBought2 },
        { image: Images.recentBought3 },
        { image: Images.recentBought4 },
        { image: Images.recentBought5 },
        { image: Images.recentBought1 },
        { image: Images.recentBought2 },
    ],
    category: [
        { name: 'categoryArr.oilsRefinedGhee', image: Images.category1 },
        { name: 'categoryArr.riceFlourGrains', image: Images.category2 },
        { name: 'categoryArr.foodCupboard', image: Images.category3 },
        { name: 'categoryArr.freshFruitsVegetables', image: Images.category4 },
        { name: 'categoryArr.drinksBeverages', image: Images.category5 },
        { name: 'categoryArr.instantMixes', image: Images.category6 },
        { name: 'categoryArr.readytoEat', image: Images.category7 },
        { name: 'categoryArr.dalsPulses', image: Images.category8 },
    ],
    colors: [
        colors.category1,
        colors.category2,
        colors.category3,
        colors.category4,
    ],
    offers: [
        { name: 'product.assortedCapsicumCombo', image: Images.recentBought1, price: 30, weight: 'offersArr.weight1', discount: 'offersArr.discount1' },
        { name: 'product.assortedCapsicumCombo', image: Images.recentBought2, price: 20, weight: 'offersArr.weight1', discount: 'offersArr.discount2' },
        { name: 'product.assortedCapsicumCombo', image: Images.recentBought3, price: 37, weight: 'offersArr.weight1', discount: 'offersArr.discount1' },
        { name: 'product.assortedCapsicumCombo', image: Images.recentBought4, price: 35, weight: 'offersArr.weight1', discount: 'offersArr.discount2' },
    ],
    lowestPrice: [
        { name: 'product.assortedCapsicumCombo', image: Images.product1, price: 30, weight: 'offersArr.weight1', },
        { name: 'product.assortedCapsicumCombo', image: Images.product2, price: 20, weight: 'offersArr.weight1', },
        { name: 'product.assortedCapsicumCombo', image: Images.product3, price: 37, weight: 'offersArr.weight1', },
        { name: 'product.assortedCapsicumCombo', image: Images.product4, price: 35, weight: 'offersArr.weight1', },
    ],
    coupons: [
        { icon: Images.gpay, discount: '30', off: 20, },
        { icon: Images.venmo, discount: '20', off: 90, },
        { icon: Images.paypal, discount: '37', off: 70, },
    ],
    subCategory: [
        { id: 0, name: 'subCategoryArr.vegetables', image: Images.categoryPro1 },
        { id: 1, name: 'subCategoryArr.fruits', image: Images.categoryPro2 },
        { id: 1, name: 'subCategoryArr.herbs', image: Images.categoryPro3 },
        { id: 1, name: 'subCategoryArr.herbs', image: Images.categoryPro4 },
        { id: 5, name: 'subCategoryArr.sprouts', image: Images.categoryPro5 },
        { id: 6, name: 'subCategoryArr.flowers', image: Images.categoryPro6 },
        { id: 4, name: 'subCategoryArr.exoticFruits', image: Images.categoryPro7 },
        { id: 0, name: 'subCategoryArr.organic', image: Images.categoryPro8 },
        { id: 7, name: 'subCategoryArr.cutsFruits', image: Images.categoryPro9 },
        { id: 0, name: 'subCategoryArr.bouquets', image: Images.categoryPro10 },
        { id: 0, name: 'subCategoryArr.fruits', image: Images.categoryPro2 },
        { id: 6, name: 'subCategoryArr.herbs', image: Images.categoryPro3 },
        { id: 2, name: 'subCategoryArr.organic', image: Images.categoryPro8 },
        { id: 2, name: 'subCategoryArr.cutsFruits', image: Images.categoryPro9 },
        { id: 3, name: 'subCategoryArr.bouquets', image: Images.categoryPro10 },
        { id: 3, name: 'subCategoryArr.fruits', image: Images.categoryPro2 },
    ],
    productCategory: [
        { name: 'productList.freshVegetables' },
        { name: 'productCategory.herbsSeasonings' },
        { name: 'categoryArr.drinksBeverages' },
        { name: 'categoryArr.instantMixes' },
    ],
    products: [
        { name: 'product.assortedCapsicumCombo', image: Images.recentBought1, price: 30, weight: 'productArr.weight1', discount: 'productArr.discount1' },
        { name: 'product.assortedCapsicumCombo', image: Images.recentBought2, price: 20, weight: 'productArr.weight2', discount: 'productArr.discount2' },
        { name: 'product.assortedCapsicumCombo', image: Images.recentBought3, price: 37, weight: 'productArr.weight3', discount: 'productArr.discount3' },
        { name: 'product.assortedCapsicumCombo', image: Images.recentBought4, price: 35, weight: 'productArr.weight4', discount: 'productArr.discount4' },
        { name: 'product.assortedCapsicumCombo', image: Images.recentBought5, price: 25, weight: 'productArr.weight5', discount: 'productArr.discount5' },
        { name: 'product.assortedCapsicumCombo', image: Images.recentBought2, price: 65, weight: 'productArr.weight6', discount: 'productArr.discount6' },
        { name: 'product.assortedCapsicumCombo', image: Images.recentBought1, price: 45, weight: 'productArr.weight7', discount: 'productArr.discount7' },
        { name: 'product.assortedCapsicumCombo', image: Images.recentBought4, price: 15, weight: 'productArr.weight8', discount: 'productArr.discount8' },
        { name: 'product.assortedCapsicumCombo', image: Images.recentBought2, price: 65, weight: 'productArr.weight9', discount: 'productArr.discount9' },
        { name: 'product.assortedCapsicumCombo', image: Images.recentBought3, price: 35, weight: 'productArr.weight10', discount: 'productArr.discount10' },
        { name: 'product.assortedCapsicumCombo', image: Images.recentBought2, price: 75, weight: 'productArr.weight11', discount: 'productArr.discount11' },
        { name: 'product.assortedCapsicumCombo', image: Images.recentBought1, price: 35, weight: 'productArr.weight12', discount: 'productArr.discount12' },
    ],
    packSize: [
        { size: 'packsizeArr.size1' },
        { size: 'packsizeArr.size2' },
        { size: 'packsizeArr.size3' },
        { size: 'packsizeArr.size4' },
    ],
    reviewList: [
        {
            reviewName: 'orderTrackingPage.name',
            review: "reviewArr.review",
        },
        {
            reviewName: 'orderTrackingPage.name',
            review: "reviewArr.review",
        },
        {
            reviewName: 'orderTrackingPage.name',
            review: "reviewArr.review",
        },
        {
            reviewName: 'orderTrackingPage.name',
            review: "reviewArr.review",
        },
        {
            reviewName: 'orderTrackingPage.name',
            review: "reviewArr.review",
        },
        {
            reviewName: 'orderTrackingPage.name',
            review: "reviewArr.review",
        },
    ],
    termsCondition: [
        { terms: 'couponModal.terms1' },
        { terms: 'couponModal.terms2' }
    ],
    location: [
        { name: 'locationArr.locationName', address: 'locationArr.locationAddress', isWork: true },
        { name: 'locationArr.locationName', address: 'locationArr.locationAddress', isWork: false },
        { name: 'locationArr.locationName', address: 'locationArr.locationAddress', isWork: true },
        { name: 'locationArr.locationName', address: 'locationArr.locationAddress', isWork: false },
        { name: 'locationArr.locationName', address: 'locationArr.locationAddress', isWork: false },
        { name: 'locationArr.locationName', address: 'locationArr.locationAddress', isWork: true },
    ],
    payments: [
        {
            type: 'paymentsArr.selectCard',
            isCard: true,
            values: [
                { value: 'paymentsArr.card1', icons: Images.mastercard },
                { value: 'paymentsArr.card2', icons: Images.visacard },
                { value: 'paymentsArr.card3', icons: Images.discovercard },
            ]
        },
        {
            type: 'paymentsArr.netBanking',
            isCard: false,
            values: [
                { value: 'paymentsArr.netBankingType1' },
                { value: 'paymentsArr.netBankingType2' },
                { value: 'paymentsArr.netBankingType3' },
                { value: 'paymentsArr.netBankingType4' },
                { value: 'paymentsArr.netBankingType5' },
                { value: 'paymentsArr.netBankingType6' },
            ]
        },
        {
            type: 'paymentsArr.walletUPI',
            isCard: false,
            values: [
                { value: 'paymentsArr.waleetUPIType1' },
                { value: 'paymentsArr.waleetUPIType2' },
                { value: 'paymentsArr.waleetUPIType3' },
                { value: 'paymentsArr.waleetUPIType4' },
                { value: 'paymentsArr.waleetUPIType5' },
                { value: 'paymentsArr.waleetUPIType6' },
            ]
        },
        {
            type: 'paymentsArr.cashOnDelivery',
            isCard: true,
            values: [
                { value: 'paymentsArr.cashOnDelivery' },
            ]
        },
    ],
    orderDetails: [
        { name: 'product.assortedCapsicumCombo', gram: '500g', quantity: '2', price: '25.00' },
        { name: 'product.assortedCapsicumCombo', gram: '700g', quantity: '6', price: '25.00' },
        { name: 'product.assortedCapsicumCombo', gram: '600g', quantity: '3', price: '25.00' },
        { name: 'product.assortedCapsicumCombo', gram: '400g', quantity: '1', price: '25.00' },
    ],
    recentlySearch: [
        { name: 'subCategoryArr.vegetables' },
        { name: 'subCategoryArr.fruits' },
        { name: 'recentlySearch.beauty' },
        { name: 'subCategoryArr.fruits' },
    ],
    myOffers: [
        { off: 'myOffersArr.off1', onOrderAbove: 'myOffersArr.onOrderAbove', onOrder: 'myOffersArr.onOrder', code: 'myOffersArr.offerCode' },
        { off: 'myOffersArr.off2', onOrderAbove: 'myOffersArr.onOrderAbove', onOrder: 'myOffersArr.onOrder', code: 'myOffersArr.offerCode' },
        { off: 'myOffersArr.off3', onOrderAbove: 'myOffersArr.onOrderAbove', onOrder: 'myOffersArr.onOrder', code: 'myOffersArr.offerCode' },
        { off: 'myOffersArr.off4', onOrderAbove: 'myOffersArr.onOrderAbove', onOrder: 'myOffersArr.onOrder', code: 'myOffersArr.offerCode' },
        { off: 'myOffersArr.off5', onOrderAbove: 'myOffersArr.onOrderAbove', onOrder: 'myOffersArr.onOrder', code: 'myOffersArr.offerCode' },
        { off: 'myOffersArr.off6', onOrderAbove: 'myOffersArr.onOrderAbove', onOrder: 'myOffersArr.onOrder', code: 'myOffersArr.offerCode' },
    ],
    offersFilter: [
        { offer: 'offersFilterArr.allOffer' },
        { offer: 'offersFilterArr.morethan50' },
        { offer: 'offersFilterArr.morethan40' },
        { offer: 'offersFilterArr.morethan30' },
        { offer: 'offersFilterArr.morethan20' },
        { offer: 'offersFilterArr.morethan10' },
    ],
    langauges: [
        { key: 'hi', name: 'langaugesArr.hindi', icons: <Hindi /> },
        { key: 'en', name: 'langaugesArr.english', icons: <Language width={windowWidth(34)} height={windowHeight(34)} /> },
        { key: 'kr', name: 'langaugesArr.korean', icons: <Korean /> },
        { key: 'ar', name: 'langaugesArr.arabic', icons: <Arabic /> },
    ],
    currencys: [
        { key: '₹', name: 'currencyConverterArr.indianRupees', icons: <Rupees />, value: 1 },
        { key: '$', name: 'currencyConverterArr.usDollar', icons: <Dollar />, value: 0.013 },
        { key: '€', name: 'currencyConverterArr.euro', icons: <Euro />, value: 0.012 },
        { key: 'A$', name: 'currencyConverterArr.australianDollar', icons: <AustralianDollar />, value: 0.018 },
        { key: '₩', name: 'currencyConverterArr.koreanWon', icons: <KoreanWon />, value: 16.44 },
    ],
    pagesList: [
        { name: 'pagesListArr.404' },
        { name: 'aboutUsPage.aboutUsTxt' },
        { name: 'pagesListArr.account' },
        { name: 'pagesListArr.addressType1' },
        { name: 'pagesListArr.addressType2' },
        { name: 'tabBar.cart' },
        { name: 'pagesListArr.categoryWide' },
        { name: 'pagesListArr.homePage' },
        { name: 'pagesListArr.login' },
        { name: 'drawer.notification' },
        { name: 'tabBar.offers' },
        { name: 'pagesListArr.onBoarding' },
        { name: 'pagesListArr.orderDetail' },
        { name: 'orderHistoryPage.orderHistoryTxt' },
        { name: 'pagesListArr.orderSuccess' },
        { name: 'pagesListArr.orderTracking' },
        { name: 'pagesListArr.payment' },
        { name: 'pagesListArr.product' },
        { name: 'pagesListArr.register' },
        { name: 'tabBar.search' },
        { name: 'pagesListArr.setting' },
        { name: 'pagesListArr.shop' },
        { name: 'pagesListArr.wishlist' },
    ],
    howIOrder: [
        { question: 'aboutUsArr.question1', answer: 'aboutUsArr.answer1' },
        { question: 'aboutUsArr.question2', answer: 'aboutUsArr.answer2' },
        { question: 'aboutUsArr.question3', answer: 'aboutUsArr.answer3' },
        { question: 'aboutUsArr.question4', answer: 'aboutUsArr.answer4' },
    ],
    notification: [
        {
            day: 'notificationArr.title1',
            value: [
                { title: 'notificationArr.value1', subtxt: 'notificationArr.time1', icon: <Discount />, tag: 'notificationArr.type3', color: colors.drawer },
                { title: 'notificationArr.value2', subtxt: 'notificationArr.time2', icon: <Offer />, tag: 'notificationArr.type3', color: colors.offer },
            ]
        },
        {
            day: 'notificationArr.title2',
            value: [
                { title: 'notificationArr.value3', subtxt: 'notificationArr.time3', icon: <PassChange />, tag: 'notificationArr.type1', color: colors.passChange },
                { title: 'notificationArr.value4', subtxt: 'notificationArr.time4', icon: <TopUp />, tag: 'notificationArr.type2', color: colors.topUp },
                { title: 'notificationArr.value1', subtxt: 'notificationArr.time1', icon: <Discount />, tag: 'notificationArr.type3', color: colors.drawer },
                { title: 'notificationArr.value2', subtxt: 'notificationArr.time2', icon: <Offer />, tag: 'notificationArr.type3', color: colors.offer },
                { title: 'notificationArr.value3', subtxt: 'notificationArr.time3', icon: <PassChange />, tag: 'notificationArr.type1', color: colors.passChange },
                { title: 'notificationArr.value4', subtxt: 'notificationArr.time4', icon: <TopUp />, tag: 'notificationArr.type2', color: colors.topUp },
                { title: 'notificationArr.value1', subtxt: 'notificationArr.time1', icon: <Discount />, tag: 'notificationArr.type3', color: colors.drawer },
                { title: 'notificationArr.value2', subtxt: 'notificationArr.time2', icon: <Offer />, tag: 'notificationArr.type3', color: colors.offer },
            ]
        },
    ],
    orderHistoryFilter: [
        {
            day: 'commonText.filter',
            value: [
                { txt: 'orderHistoryFilterArr.allOrder', id: 0 },
                { txt: 'orderHistoryFilterArr.openOrder', id: 1 },
                { txt: 'orderHistoryFilterArr.returnOrders', id: 2 },
                { txt: 'orderHistoryFilterArr.cancelledOrder', id: 3 },
            ]
        },
        {
            day: 'orderHistoryFilterArr.timeFilter',
            value: [
                { txt: 'orderHistoryFilterArr.last30days', id: 4 },
                { txt: 'orderHistoryFilterArr.last6Month', id: 5 },
                { txt: 'orderHistoryFilterArr.year1', id: 6 },
                { txt: 'orderHistoryFilterArr.year2', id: 7 },
            ]
        },
    ],
    orderHistoryTime: [
        { time: 'orderHistoryPage.processing' },
        { time: 'orderHistoryPage.last30days' },
        { time: 'orderHistory.historyTime' },
        { time: 'orderHistory.historyTime1' },
    ],
    orderHistory: [
        {
            id: 'orderHistory.orderHistoryId',
            date: 'orderHistory.orderHistoryDate',
            add: 'orderHistory.orderHistoryAdd',
            paid: 250,
            item: 'orderHistory.totalItem',
            review: 0
        },
        {
            id: 'orderHistory.orderHistoryId',
            date: 'orderHistory.orderHistoryDate',
            add: 'orderHistory.orderHistoryAdd',
            paid: 250,
            item: 'orderHistory.totalItem',
            review: 2
        },
        {
            id: 'orderHistory.orderHistoryId',
            date: 'orderHistory.orderHistoryDate',
            add: 'orderHistory.orderHistoryAdd',
            paid: 250,
            item: 'orderHistory.totalItem',
            review: 2
        },
        {
            id: 'orderHistory.orderHistoryId',
            date: 'orderHistory.orderHistoryDate',
            add: 'orderHistory.orderHistoryAdd',
            paid: 250,
            item: 'orderHistory.totalItem',
            review: 5
        },
        {
            id: 'orderHistory.orderHistoryId',
            date: 'orderHistory.orderHistoryDate',
            add: 'orderHistory.orderHistoryAdd',
            paid: 250,
            item: 'orderHistory.totalItem',
            review: 2
        },
        {
            id: 'orderHistory.orderHistoryId',
            date: 'orderHistory.orderHistoryDate',
            add: 'orderHistory.orderHistoryAdd',
            paid: 250,
            item: 'orderHistory.totalItem',
            review: 3
        },
        {
            id: 'orderHistory.orderHistoryId',
            date: 'orderHistory.orderHistoryDate',
            add: 'orderHistory.orderHistoryAdd',
            paid: 250,
            item: 'orderHistory.totalItem',
            review: 2
        },
        {
            id: 'orderHistory.orderHistoryId',
            date: 'orderHistory.orderHistoryDate',
            add: 'orderHistory.orderHistoryAdd',
            paid: 250,
            item: 'orderHistory.totalItem',
            review: 1
        },
    ],
    quantity: [
        { gram: 'quantityArr.gram1', price: 24 },
        { gram: 'quantityArr.gram2', price: 34 },
        { gram: 'quantityArr.gram3', price: 48 },
        { gram: 'quantityArr.gram4', price: 70 },
        { gram: 'quantityArr.gram5', price: 100 },
        { gram: 'quantityArr.gram6', price: 150 },
    ],
    delivery: [
        { delivery: 'deliveryTimeArr.deliveryTime1' },
        { delivery: 'deliveryTimeArr.deliveryTime2' },
        { delivery: 'deliveryTimeArr.deliveryTime3' },
        { delivery: 'deliveryTimeArr.deliveryTime4' },
        { delivery: 'deliveryTimeArr.deliveryTime5' },
        { delivery: 'deliveryTimeArr.deliveryTime6' },
    ],
    reviewStar: [
        {},
        {},
        {},
        {},
        {}
    ],
    cityArr: [
        { title: 'cityArr.city1' },
        { title: 'cityArr.city2' },
        { title: 'cityArr.city3' },
        { title: 'cityArr.city4' },
        { title: 'cityArr.city5' },
        { title: 'cityArr.city6' },
        { title: 'cityArr.city7' },
        { title: 'cityArr.city8' },
        { title: 'cityArr.city9' },
        { title: 'cityArr.city10' },
    ],
    stateArr: [
        { title: 'stateArr.state1' },
        { title: 'stateArr.state2' },
        { title: 'stateArr.state3' },
        { title: 'stateArr.state4' },
        { title: 'stateArr.state5' },
        { title: 'stateArr.state6' },
        { title: 'stateArr.state7' },
        { title: 'stateArr.state8' },
        { title: 'stateArr.state9' },
        { title: 'stateArr.state10' },
    ]
}