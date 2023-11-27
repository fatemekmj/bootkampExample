import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
/////////////////////////////////////////////////////////////////////
/*--------------------- */
// person: {name: string, businesspeople: string,tar: string,sabtenam: boolean}[]=
// [
//     {name:'mey',businesspeople:'مرکزی',tar:'1402/08/07',sabtenam:true},
//     {name:'ابراهیم کریمی',businesspeople:'مشکین',tar:'1402/07/26',sabtenam:true},
//     {name:'ابراهیم کریمی',businesspeople:'مرکزی',tar:'1402/08/07',sabtenam:true},
//     {name:'ابراهیم کریمی',businesspeople:'شعبه مرکزی',tar:'1402/08/07',sabtenam:true},
//     {name:'خسته نباشید',businesspeople:'آبشار نیاگارا',tar:'1402/08/01',sabtenam:true},
//     {name:'سید امیرحسین',businesspeople:'وارد نشده',tar:'1402/07/01',sabtenam:true},
//     {name:'سید امیرحسین خلیلیان',businesspeople:'مرکزی',tar:'1402/07/04',sabtenam:true},
//     {name:'کریمی',businesspeople:'مرکزی',tar:'1402/08/01',sabtenam:true},
//     {name:'مسعود',businesspeople:'مرکزی',tar:'1402/08/13',sabtenam:true},
//     {name:'میثم شمشیری',businesspeople:'آرایشگاه میثم',tar:'1402/07/19',sabtenam:true}
//   ];
/*--------------------- */
// product: {
//   name: string, price: number, img: string, description: string,
//   colors: { name: string, hex: string }[], insurances: { name: string, checked: boolean }[]
// } = {
//   name: 'iphone13',
//   price: 50000,
//   description: '50000',
//   colors: [{name: 'سفید', hex: '#ffffff'}, {name: 'سیاه', hex: '#000000'}],
//   insurances: [{name: 'سفید', checked: true}, {name: 'سیاه', checked: false}],
//   img: 'https://dkstatics-public.digikala.com/digikala-products/24e36bba767e87349656c030630fe64b2ed565dc_1638169300.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90'
// }
/*--------------------- */
sections:{filters:{p:string , a:string}[] ,
          sendTodey:{checkBox:boolean , label:string , img:string}[] ,
          sendSeller:{checkBox:boolean , label:string , img:string}[] ,
          available:string ,
          availableDigi:string ,
          textBox:string,
          scor:{span:string , img:string}[],
          nav:{text:string , a:{p:string}[]}[] ,
          colorsDiv:{name:string , img1:string , img2:string , span:{colorname:string , number:number, hex:string }[]}[],
          sendLabel:{img:string , p:string}
         }[] = [{
                  filters:[{
                            p: "فیلتر", 
                            a:"فیلترها"
                          }],
                  sendSeller:[{
                            checkBox : false ,
                            label :"ارسال فروشنده" ,
                            img:"../assets/icon/ab8e1e2a.png"
                             }],
                  sendTodey:[{
                            checkBox : false ,
                            label :  "ارسال فردا",
                            img:"../assets/icon/d15448c2.svg" 
                  }],
                  available:"فقط کالای موجود",
                  availableDigi:" کالای موجود در دیجی کالا",
                  textBox:"گوشی موبایل ناتینگ مدل Phone 1 دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
                  scor:[{span:"4.8" , img:""}],
                  nav:[{
                        text: "مرتب سازی :" ,
                        a : [{p: "پربازدید ترین"},
                              {p: "جدید ترین"},
                              {p: "پرفروش ترین"},
                              {p: "ارزان ترین"},
                              {p: "گران ترین"},
                              {p: "سریع ترین ارسال"},
                              {p: "پیشنهاد خریداران"},
                              {p: "منتخب"
                        }]
                      }],
                  colorsDiv:[{
                              name:"sumsong",
                              img1:"../assets/digikala/IncredibleOffer.svg",
                              img2:"../assets/img/95e9a7327d1f8650f13794a7c33917d9d130b987_1660478804.webp",
                              span:[
                                    {colorname:"green" , number:2 , hex:'#006400'},
                                    {colorname:"green" , number:3 , hex:'#000000'},
                                    {colorname:"blue" , number:4 , hex:'#0000FF'}
                              ]
                            }],
                  sendLabel:{
                    img:"../assets/digikala/40103386d101974d18b40cee05e8d62823a657fa_1678547065.png",
                    p:"ارسال رایگان"
                  }
                }]

/*--------------------- */

continer1:{
  h1:string,
  profile:{text1:string , p1:string ,text2:string , p2:string }[],
  box1 :{imgs1:{src1:string , src2:string , src3:string , src4:string}[] , h1:{p1:string , p2:string , p3:string , p4:string}}[]
  }[]=[{
          h1:'A MackBook Pro for everyone. ',
          profile:[{ 
                   text1:"MackBokk Pro 14" ,
                   p1:"M3 clip" ,
                   text2:"MackBokk Pro 16" ,
                   p2:"M3 pro or Max chip"
                  }],
          box1:[{ 
                  imgs1:[{
                          src1:"../assets/img/photo_2023-11-17_18-26-38.jpg",//gold
                          src2:"../assets/img/photo_2023-11-17_18-04-30.jpg" ,//black
                          src3:"../assets/img/photo_2023-11-17_18-26-32.jpg",//silver
                          src4:"../assets/img/apple-m2-icon-mac-202301.png",//icon
                          
                        
                        }],
                  h1:{
                      p1:"support for one extemal display",
                      p2:"up to 22 hours battery life",
                      p3:"support for up to two or four external display",
                      p4:"up to 18 hours battery life"
                     }
                }]
      }]

continer2:{
  text: string ,
  link:string ,
  obj:{img1:string ,
       img2:string,
       img3:string,
       colors1:{colorname:string , hex:string}[],
       colors2:{colorname:string , hex:string}[]
      }[],
  p1:string ,
  p2:string ,
  p3:string ,
  texts1:{h5:string}[],
  texts2:{h5:string}[],
  texts3:{h5:string}[],
  btn:string
      }[] = [{
                text:"Which desktop is right for you?",
                link:"Compare all Mac models > ",
                obj:[
                      {img1:"../assets/img/iMac-24-inch-zilver-1.webp",
                      img2:"../assets/img/mac-mini-hero-202301_FMT_WHH.jfif",
                      img3:"../assets/img/download.jfif",
                      colors1:[{colorname:"blue" , hex:"#3F51B5"},{colorname:"bluee" , hex:"#5C6BC0"},{colorname:"" , hex:"#673AB7"},{colorname:"" , hex:"#26C6DA"},{colorname:"" , hex:"#8D6E63"},{colorname:"" , hex:"#B71C1C"},{colorname:"" , hex:"#33691E"},{colorname:"" , hex:"#AEEA00"},{colorname:"" , hex:"#18FFFF"}] ,
                      colors2:[{colorname:"light" , hex:"#9E9E9E"}]}
                    ],
                p1:"iMac",
                p2:"Mac mini",
                p3:"Mac studiu",
                texts1:[
                      {h5:"from $1299 or $25/mo. for 12 mo."},
                      {h5:"Apple M3 chip"},
                      {h5:"8-core CPU"},
                      {h5:"8-or -10core GBU"},
                      {h5:"8GB to 2TB untifiled memory"},
                      {h5:"8GB to 24GB srorage"},
                      {h5:"4.5K Retina display"},
                ],
                texts2:[
                  {h5:"from $599 or $49.91. for 12 mo."},
                  {h5:"Apple M2 or mt pro chip"},
                  {h5:"8- to12-core CPU"},
                  {h5:"10-to 19-core GBU"},
                  {h5:"8GB to 32GB untifiled memory"},
                  {h5:"256GB to 8GBT srorage"},
                ],
                texts3:[
                  {h5:"from $1999 or 166.5/mo. for 12 mo."},
                  {h5:"Apple M2 Max or M2 Ultra chip"},
                  {h5:"12- or24-core CPU"},
                  {h5:"30-to 76-core GBU"},
                  {h5:"32GB to 192GB untifiled memory"},
                  {h5:"512GB to 8GBT srorage"},
                ],
                btn:"Buy"
            }]

            







// continer:{h1:{p:string }, box1:{imgs:{src1:string , src2:string}[] , h5:{p1:string , p2:string}[]}[]}[] =[
//   {
//     h1:{p:"A MackBook Pro for everyone."},
//     box1:[
//       {
//         imgs:[
//               {src1:"'https://www.digikala.com/mag/wp-content/uploads/2023/10/MacBook-Pro-3.jpg'" ,
//               src2:"'https://sakhtafzarmag.com/wp-content/uploads/2023/05/apple-M3-960x540.png'"
//               }
//             ] ,
//         h5:[
//             {p1:"support for one extemal display" ,
//             p2:"up to 22 hours battery life"
//             }
//           ]
//       }
//     ],
//     box2:[
//       {
//         imgs:{src1:"'https://www.digikala.com/mag/wp-content/uploads/2023/10/MacBook-Pro-3.jpg'",
//               src2:"'https://sakhtafzarmag.com/wp-content/uploads/2023/05/apple-M3-960x540.png'",
//               src3:"'https://sakhtafzarmag.com/wp-content/uploads/2023/05/apple-M3-960x540.png'"},
//         h5:{p1:"support for up to two or four external display" ,
//             p2:"up to 18 hours battery life"}
//       }
//     ]
//   }
// ]

  ngOnInit() {
    
    
  }
}
