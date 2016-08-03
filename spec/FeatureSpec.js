'use strict';

describe('Feature test', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('plane can be instructed to land in an airpot', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes can be instructed to takeoff', function() {
    plane.land(airport);
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });

  it('blocks takeoff when weather is stormy', function() {
    plane.land(airport);
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function() { plane.takeoff(); }).toThrowError('cannot takeoff during storm');
    expect(airport.planes()).toContain(plane);
  });
});
