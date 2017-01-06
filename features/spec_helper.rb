ENV['RACK_ENV'] = 'test'

require './app'
require 'capybara'
require 'capybara/rspec'
require 'capybara-webkit'

Capybara.default_wait_time = 5
Capybara.javascript_driver = :webkit

Capybara.app = Sinatra::Application
