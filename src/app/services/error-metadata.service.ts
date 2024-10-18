import { Injectable,ErrorHandler } from '@angular/core';
import { timeStamp } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ErrorMetadataService implements ErrorHandler {

  public handleError(error: any): void {
    const date = new Date();
    console.error({
      timeStamp: date.toISOString(),
      message: error.message,
      zone: error.zone
  });
}

  
}
