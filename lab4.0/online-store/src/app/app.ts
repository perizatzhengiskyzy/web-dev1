import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class AppComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Чехол для Apple iPhone 13 серый',
      description: 'чехол для телефона',
      price: 38900,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p4f/p07/14525019.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pf8/pab/92239158.bin?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-13-seryi-131815019/?c=750000000',
    },

    {
      id: 2,
      name: 'Groinneya TJ-05 пучковые ',
      description: ' 0.03 мм черный mix 8-16 мм',
      price: 647,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa9/p37/10990956.jpeg?format=gallery-medium',
      images:[

        ''

      ],
      link: 'https://kaspi.kz/shop/p/groinneya-tj-05-puchkovye-c-0-03-mm-chernyi-mix-8-16-mm-130803713/?c=750000000'
    },

    {
      id: 3,
      name:'Кроссовки белый',
      description: 'Made in China',
      price:4323,
      rating:4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pea/39401121.jpg?format=gallery-medium',

      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p6d/p78/39401125.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p15/pee/39401131.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pcc/pf4/39401150.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2c/p4a/39401155.jpeg?format=gallery-medium'
      ],

      link:'https://kaspi.kz/shop/p/krossovki-krossovki-593378040-belyi-40-138866363/?c=750000000&hasVariants=true'
    },
    {
      id: 4,
      name:'Кроссовки DECUA DECUA ZIM45 черный',
      description: 'Made in China',
      price:10950,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/pe2/pc7/81325071.jpg?format=gallery-medium',

      images:[
        'https://resources.cdn-kaspi.kz/img/m/p/p8e/pc7/81325074.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p55/pc7/81325076.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p79/pc4/81325081.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p40/pc4/81325083.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/krossovki-decua-decua-zim45-zim45-chernyi-43-150522144/?c=750000000',
    },

    {
      id: 5,
      name:'Блендер стационарный MONTERO PRO K9',
      description: ' серебристый',
      price:27390,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/pb6/p3e/63083117.jpeg?format=gallery-medium',

      images:[
        'https://resources.cdn-kaspi.kz/img/m/p/p20/p42/63083118.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p89/p45/63083119.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9f/p90/63083120.jpeg?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/blender-statsionarnyi-montero-pro-k9-serebristyi-133292706/?c=750000000',
    },

    {
      id: 6,
      name:'Пылесос Menox R01 фиолетовый, серый',
      description: ' серый',
      price:33900,
      rating:4.9,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p17/pd0/96953174.png?format=gallery-medium',
      images:[
        'https://resources.cdn-kaspi.kz/img/m/p/pe2/p7b/66840701.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc6/p7b/66840702.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p39/p7b/66840707.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p78/p78/66840711.jpg?format=gallery-medium'
      ],
link:'https://kaspi.kz/shop/p/menox-r01-fioletovyi-seryi-135631137/?c=750000000',
    },

    {
      id: 7,
      name:'Шкаф для обуви Soft-mebel, ЛДСП',
      description: ' 60x35x170 см',
      price:31740,
      rating:4.8,
      image:'https://resources.cdn-kaspi.kz/img/m/p/h19/h3c/64522180231198.jpg?format=gallery-medium',
      images:[
        'https://resources.cdn-kaspi.kz/img/m/p/h19/h3c/64522180231198.jpg?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/obuvnitsa-shkaf-dlja-obuvi-soft-mebel-60x35x170-sm-belyi-105781012/?c=750000000'
    },

    {
      id: 8,
      name:'Диван Morbido Комфорт, 210х80 см, обивка микровелюр, серый',
      description: '210х80 см, обивка микровелюр',
      price:51294,
      rating:4.7,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p52/p92/88087136.png?format=gallery-medium',
      images:[
        'https://resources.cdn-kaspi.kz/img/m/p/ha6/h5b/86777038307358.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he2/h45/86777038340126.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7f/h30/86777038372894.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hba/h40/86777038536734.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/morbido-divan-prjamoi-komfort-obivka-mikroveljur-80h210h80-sm-seryi-109382996/?c=750000000',
    },

    {
      id: 9,
      name:'Журнальный столик приставной, 40x40x62 см, черный, белый',
      description: '40x40x62 см, черный, белый',
      price:4228,
      rating:4.8,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p9d/pe8/74524384.png?format=gallery-medium',

      images:[
        'https://resources.cdn-kaspi.kz/img/m/p/hd2/hd7/84077509967902.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe5/pc4/80119647.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p01/pc5/80119648.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p01/pc5/80119648.jpg?format=gallery-medium'
      ],

      link:'https://kaspi.kz/shop/p/zhurnal-nyi-stolik-pristavnoi-40x40x62-sm-chernyi-belyi-113594562/?c=750000000',
    },

    {
      id: 10,
      name:'Отпариватель MONTERO PRO',
      description:'S200 розовый',
      price:45890,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/pca/pec/18583732.png?format=gallery-medium',

      images:[
        'https://resources.cdn-kaspi.kz/img/m/p/pf7/paf/18583733.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p61/pb3/18583734.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p35/pba/18583736.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p08/pc1/18583738.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/otparivatel-montero-pro-s200-rozovyi-132998486/?c=750000000',
    },

  ]
  shareWhatsApp(link: string) {
  const url = `https://wa.me/?text=${encodeURIComponent(link)}`;
  window.open(url, '_blank');
}

shareTelegram(link: string, name: string) {
  const url = `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(name)}`;
  window.open(url, '_blank');
}
}