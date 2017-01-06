require './app'
require 'rspec/core/rake_task'
require 'jasmine'
require 'jshintrb/jshinttask'
require './features/sprockets_middleware'

load 'jasmine/tasks/jasmine.rake'

desc 'js validation'
Jshintrb::JshintTask.new :jshint do |task|
  task.pattern = 'assets/javascripts/*.js'
  task.options = Jshintrb::Lint::DEFAULTS.merge({:predef => ['jQuery']})
end

RSpec::Core::RakeTask.new(:spec)

RSpec::Core::RakeTask.new(:feature) do |task|
  task.pattern = 'features/*spec.rb'
end

desc 'host sprockets middleware'
task :host_sprockets_middleware do
  class App < Sinatra::Base
    use SprocketsMiddleware, %r{/assets} do |env|
      env.append_path "assets/stylesheets"
      env.append_path "assets/javascripts"
    end
  end

  App.run!
end

desc 'compile jsx for production'
task :compilejsx do
  `jsx --no-cache-dir assets/javascripts/app assets/javascripts/app.prod`
end

task :default=>[:spec, :feature, :jshint, :'jasmine:ci', :compilejsx]

