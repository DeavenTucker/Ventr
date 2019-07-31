import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterChatPage } from './character-chat.page';

describe('CharacterChatPage', () => {
  let component: CharacterChatPage;
  let fixture: ComponentFixture<CharacterChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterChatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
