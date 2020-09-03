import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ActualitesService {
  actualitee = [ 
    {
      id:1,
      titre:'الأرض كوكبنا',
      photo:"assets/img/img1.jpg",
      description:`يحتضن #المسرح_ البلدي بالعاصمة العرض الأول لمسرحية الأطفال
      " الأرض كوكبنا " إخراج هدى اللموشي نص الحبيب غزال إنتاج فرقة مدينة تونس للمسرح وذلك يوم الثلاثاء 17 ديسمبر 2019 على الساعة السابعة مساء .`
    },
    {
      id:2,
      titre:"احميها وما متمدش يدك عليها",
      photo:"assets/img/img2.jpg",
      description:'نظمت الدايرة البلدية بالعمران الأعلى يوم السبت 14 ديسمبر 2019 ملتقى حول العنف المسلط على المراة بعنوان " احميها وما متمدش يدك عليها " بالشراكة مع المندوبية الجهوية للمراة والاسرة والطفولة وكبار السن بتونس، جمعية نساء تونس الحديثة، الجمعية التونسية للتصرف والتوازن الاجتماعيTAMMS ، جمعية لباسنا اصالة و حضارة . وقد تضمن الملتقى مجموعة من المداخلات قانونية واجتماعية ونفسية ودينية هذا الى جانب عرض لمجموعة مسرح الحوار بدار الشباب ابن خلدون.'
    },
    {
      id:3,
      titre:'الزيارة',
      photo:"assets/img/img3.jpg",
      description:"يحتضن #المسرح _البلدي_ بالعاصمة عرض ' الزيارة ' لسامي اللجمي وذلك مساء الثلاثاء 24 ديسمبر 2019 على الساعة السابعة والنصف مساءا ."
    }
  
  ];
  
  constructor( private route: ActivatedRoute, private service: ActualitesService ) { }
  getact(){
    return this.actualitee;
  }
  getactualited(id:number){
    for(let i=0;i<this.actualitee.length ;i++){
      if (this.actualitee[i].id==id){
        return this.actualitee[i];
      }
    }
  }
}
