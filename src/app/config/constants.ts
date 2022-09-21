import { Injectable } from '@angular/core'; 

@Injectable() 
export class Constants {
    public static readonly API_ENDPOINT: string = 'https://localhost:8080/AngularTestSpringBoot/Spring/query?account=kusoyalo'; 
    public static readonly API_ENDPOINT2: string = 'https://localhost:8080/AngularTestSpringBoot/Spring/query'; 
    public static readonly API_ENDPOINT3: string = 'https://localhost:8080/AngularTestSpringBoot/Spring/query?';
} 
