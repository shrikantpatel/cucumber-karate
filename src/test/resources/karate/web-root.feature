Feature: Example Application

  Scenario: redirect to google.com
    * configure followRedirects = false
    Given url baseUrl
    When method get
    Then status 302
    And match header location == 'https://www.google.com'