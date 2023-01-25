import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'Testserver', content: 'Just a test!' }];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueServerData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueServerData.serverName,
      content: blueServerData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst(){
    this.serverElements.splice(0,1);
  }

  onIntervalFired(value: number) {
    console.log(value);
    value % 2 === 0 ? this.evenNumbers.push(value) : this.oddNumbers.push(value);
    console.log(this.evenNumbers);
    console.log(this.oddNumbers);
  }

}
