import { Component, OnInit } from '@angular/core';
import { FixtureService } from '../../services/fixture.service';
import {Fixture} from "../../../../public/domain/fixture";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-fixture',
    templateUrl: './fixture.component.html',
    imports: [CommonModule],
    styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {
    fixtures: Fixture[] = [];
    errorMessage: string = '';

    constructor(private fixtureService: FixtureService) {}

    ngOnInit(): void {
        this.fixtureService.getFixtureList().subscribe(
            (data) => {
                this.fixtures = data;
                console.log(this.fixtures);
            },
            (error) => {
                console.error('Error fetching fixtures:', error);
                this.errorMessage = 'Error fetching fixtures. Please try again later.';
            }
        );
    }
}
