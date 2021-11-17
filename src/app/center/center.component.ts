import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public timeline = [
    {
      date: 1993,
      header: 'Doğum',
      description: "1993 yılının Eylül ayında soğuk bir çarşamba günü sabah saatlerinde Afyonkarahisar'ın Sandıklı ilçesinde dünyaya geldim",
    },
    {
      date: 2007,
      header: 'İlkokul Mezuniyet',
      description: "Antalya Altınova İlköğretim Okulu'ndan mezun oldum",
    },
    {
      date: 2011,
      header: 'Lise Mezuniyet',
      description: "Antalya Endüstri Meslek ve Teknik Lisesi Bilişim Teknolojileri alanından mezun oldum",
    },
    {
      date: 2012,
      header: 'Üniversite',
      description: "Selçuk Üniversitesi Teknoloji Fakültesi Bilgisayar Mühendisliği bölümüne kayıt oldum. İlk yıl zorunlu hazırlık okuduk.",
    },
    {
      date: 2017,
      header: 'Staj - ERS Yazılım',
      description: "Bölümün zorunlu yaz stajlarını birleştirerek otel rezervasyon sistemleri üzerine ürün geliştiren Antalya Teknokent firması olan ERS Yazılım'da tamamladım. Staj süresince React ile dinamik web sayfaları oluşturmak için geliştirilen Tübitak projesinde Test Uzmanı olarak görev aldım. Staj boyunca projede karşılaştığımız sorunları proje ekibine ve yöneticime raporladım.",
    },
    {
      date: 2018,
      header: 'İş Yeri Eğitimi - Talya Bilişim',
      description: "Son sınıfın bir dönemini İş Yeri Eğitimi adı altında intern olarak yine bir Antalya Teknokent şirketi olan ve otel yönetim sistemleri geliştiren Talya Bilişim'de çalıştım. Çalıştığım süre boyunca desktop uygulaması olan restoran yönetim modülünün web uygulamasına dönüştürülmesi projesinde görev aldım. Frontend'de HTML, CSS, KnockoutJS; backend'de .Net Web API; database olarak ise MSSQL kullanarak dönüşüm projesini tamamladık.",
    },
    {
      date: 2018,
      header: 'Üniversite Mezuniyet',
      description: "Selçuk Üniversitesi Teknoloji Fakültesi Bilgisayar Mühendisliği bölümünden mezun oldum",
    },
    {
      date: 2018,
      header: 'İşe Giriş - Talya Bilişim',
      description: "Daha önce İş Yeri Eğitimimi tamamladığım Talya Bilişim'de restoran yönetim modülünde Yazılım Uzmanı olarak işe başladım. Çalıştığım süre zarfında çeşitli projelerde HTML, CSS, Bootstrap, Material, Javascript, Angular, NodeJS, .NET Web API, MSSQL, React Native gibi teknolojilerle projeler geliştirdim.",
    },
    {
      date: 2019,
      header: 'İşe Giriş - ETSTUR',
      description: "Türkiye'nin en büyük tur şirketi olan ETSTUR'da ODAMAX ekibinde Frontend Developer olarak işe başladım. Çalıştığım süre boyunca HTML, CSS, Javascript, JQuery, JSP, JSF, Spring MVC, PostgreSQL, Elastic Search gibi teknolojilerle geliştirmeler yaptım."
    },
    {
      date: 2020,
      header: 'İşe Giriş - INTERTECH',
      description: "Bir Denizbank iştiraki olan ve 54 bankaya hizmet veren INTERTECH'te halen Uzman Yazılım Mühendisi olarak çalışmaktayım. Javascript, .NET, MSSQL, React, .NET Core vb. teknolojiler ve TFS, GIT, Jira, Jenkins, Kibana gibi araçları kullanıyoruz."
    }
  ]

}
