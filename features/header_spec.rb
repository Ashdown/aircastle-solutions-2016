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

end