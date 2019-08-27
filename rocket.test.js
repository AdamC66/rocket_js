
const Rocket = require('./rocket');

describe('Rocket', () => {

  describe('constructor', () => {
    test('it should set default attributes if nothing is passed', () => {
      let rocket = new Rocket
    });

    test("it should set the rocket's name if provided", () => {
      let rocketNameTest = new Rocket({name : "Serenity IV"})
      expect(rocketNameTest.name).toBe('Serenity IV')
    });
  });

  describe('liftOff', () => {
    test('Return False if the rocket is already flying', () => {
      let rocketLiftoff = new Rocket({flying:true})
      expect(rocketLiftoff.liftOff()).toBe(false)
    });
    test('Return True if the rocket is not flying and thus, lifts off', () => {
      let rocketLiftoff = new Rocket({flying:false})
      expect(rocketLiftoff.liftOff()).toBe(true)
    });
  });
  describe('Land', () => {
    test('Return False if the rocket is not flying', () => {
      let rocketland = new Rocket({flying:false})
      expect(rocketland.land()).toBe(false)
    });
    test('Return True if the rocket is flying and thus, lands', () => {
      let rocketland = new Rocket({flying:true})
      expect(rocketland.land()).toBe(true)
    });
  });
  describe('status', () => {
    test('Return ready for liftoff if the rocket is not flying', () => {
      let rocketstatus = new Rocket({flying:false})
      expect(rocketstatus.status()).toContain('ready for liftoff!')
    });
    test('Return flying through the sky if the rocket is flying', () => {
      let rocketstatus = new Rocket({flying:true})
      expect(rocketstatus.status()).toContain('flying through the sky')
    });
  });
  describe('Send Coded Signal', () => {
    test('Return \'boop\' if no message code provided', () => {
      let rocketMessage = new Rocket({flying:false})
      expect(rocketMessage.sendCodedSignal()).toBe('boop')
    });
    test('Return \'beep\' if code <10 is passed', () => {
      let rocketMessage = new Rocket({flying:false})
      expect(rocketMessage.sendCodedSignal(6)).toBe('beep')
    });
    test('Return \'beep beep\' if code <10 is passed and rocket is flying', () => {
      let rocketMessage = new Rocket({flying:true})
      expect(rocketMessage.sendCodedSignal(6)).toBe('beep beep')
    });
    test('Return \'boop beep beep\' if code >10 is passed and rocket is not flying', () => {
      let rocketMessage = new Rocket({flying:false})
      expect(rocketMessage.sendCodedSignal(18)).toBe('boop beep beep')
    });
    test('Return \'boop boop boop\' if code >10 is passed and rocket is flying', () => {
      let rocketMessage = new Rocket({flying:true})
      expect(rocketMessage.sendCodedSignal(18)).toBe('boop boop boop')
    });

    


  });




});
