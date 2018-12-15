

Platform, Compiler, NgZone - ReflectiveInjector => StaticInjector
Module, Component - not ReflectiveInjector

provide: [

   {
       provide: FactoryLoader,
       useClass: FactoryStaticLoader,
       deps: [ ComponentResolver ]
   }


   {
       provide: ResultService,
       useFactory: (isPreview) => {
         if(!isPreview) {
           return new ResultService();
         } else {
            return new FakeResultService(); 
         }
          
       },
       deps: [ IsPreview, ItemService ]
   }

   {  
       provide: IsPreview,
       useValue: true

   }


    {
       token: UserService,
       useExisting: AdminService,
    }




]




@Coponent
@Directive
@Pipe

@Injectable



@Inject