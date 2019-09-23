import './app.scss';
import angular from 'angular';
const mainApp = angular.module('app', []);
import { appController } from './app.controller';
import appComponent from './app.component';

mainApp
  .component('app', appComponent)
  .controller('appController', appController);
