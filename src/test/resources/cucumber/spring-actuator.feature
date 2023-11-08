Feature: Actuator api

  Scenario: actuator resource is available
    When the client calls /actuator
    Then the client receives status code of 200
