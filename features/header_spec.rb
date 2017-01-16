require_relative 'spec_helper'

feature 'non-javascript header' do

  scenario 'should say Rory Devane' do
    visit '/'
    within('.header') do
      expect(page).to have_text('Rory Devane')
    end
  end

  scenario 'should say Web Developer' do
    visit '/'
    within('.header') do
      expect(page).to have_text('Full Stack Web Developer')
    end
  end

end

feature 'javascript header' do

  scenario 'should say Rory Devane', js:true do
    visit '/'
    within('.header') do
      expect(page).to have_text('Rory Devane')
    end
  end

  scenario 'should say Web Developer', js:true do
    visit '/'
    within('.header') do
      expect(page).to have_text('Full Stack Web Developer')
    end
  end

  scenario 'My Portfolio link should work', js:true do
    visit '/'
    within('.header') do
      expect(page).to have_text('My Portfolio')
      click_link('My Portfolio')
      expect(current_url).to have_text('#portfolio')
    end
  end

  scenario 'About Me link should work', js:true do
    visit '/'
    within('.header') do
      expect(page).to have_text('About Me')
      click_link('About Me')
      expect(current_url).to have_text('#about')
    end
  end

  scenario 'Links link should work', js:true do
    visit '/'
    within('.header') do
      expect(page).to have_text('Links')
      click_link('Links')
      expect(current_url).to have_text('#links')
    end
  end

end