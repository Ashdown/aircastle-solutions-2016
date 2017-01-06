require_relative 'spec_helper'

feature 'Capybara Test Application' do

  scenario "says Home Page" do
    visit '/'

    expect(page).to have_text('Home Page')
  end

  scenario "tests javascript is working", js:true do
    visit '/'

    expect(page).to have_text('This is new content')

  end

  scenario "says todos", js:true do
    visit '/'

    expect(page).to have_text('todos')

  end

  scenario "says friday", js:true do
    visit '/'
    expect(page).to have_text('friday')

  end

end
