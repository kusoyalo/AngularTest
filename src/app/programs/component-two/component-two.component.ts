import * as $ from "jquery";
import { Component, OnInit } from '@angular/core';
import { ProgramsService } from '../programs.service';
import{ Constants } from '../../config/constants'; 
import { HttpHeaders, HttpParams, HttpUrlEncodingCodec } from '@angular/common/http';
import { JsonPipe } from "@angular/common";

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent implements OnInit {

  constructor(private service: ProgramsService) { }

  ngOnInit(): void {
  }

  getRequest() {
    this.service.get(Constants.API_ENDPOINT).subscribe(
      (response) => { 
        console.log(response);
      }
    );
  }

  postRequest() {
    var params = new HttpParams();
    params = params.set('account', 'kusoyalo');

    this.service.post(Constants.API_ENDPOINT2,params).subscribe(
      (response) => { 
        console.log(response);
      }
    );
  }

  httpClient() {
    var url = Constants.API_ENDPOINT3;
    
    var encodingCodec = new HttpUrlEncodingCodec();

    var httpParams = new HttpParams()
    .set("account","kusoyalo");
    //如果遇到特殊符號，要用encodingCodec.decodeValue
    //例如.set("userPD",encodingCodec.decodeValue("24662802!$%26"))

    url += httpParams.toString();

    this.service.post(url,null).subscribe(
      (response) => { 
        console.log(response);
        
        //轉成json物件
        var responseJson = JSON.parse(JSON.stringify(response));
        console.log(responseJson.username);
      }
    );
  }
  ajax(){
    var url = Constants.API_ENDPOINT2;
    
    $.ajax({
      url: url,
      type: 'POST',
      data: {
        account:'kusoyalo'
      },
      success: function(data) {
          console.log(data);
          console.log(data.username);
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
          console.log(errorThrown);
      }
    });
  }
}
