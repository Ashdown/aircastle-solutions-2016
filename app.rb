require 'sinatra'
require 'slim'
require 'json'
Dir[File.join(File.dirname(__FILE__), './lib/helpers', '*.rb')].each {|file| require file }
Dir[File.join(File.dirname(__FILE__), './lib/models', '*.rb')].each {|file| require file }

set :haml, :format => :html5

helpers SampleHelper

get '/' do
  slim :index
end

get '/api/test/projects/' do
  content_type :json
  File.read('features/data/projects.json');
end

get '/api/test/about/' do
  content_type :json
  File.read('features/data/about.json');
end

get '/api/test/links/' do
  content_type :json
  File.read('features/data/links.json');
end