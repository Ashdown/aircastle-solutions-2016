require_relative 'spec_helper'

feature 'projects' do

  scenario 'should show project module', js:true do
    visit '/'
    expect(page).to have_text('My Portfolio')
  end

  scenario 'should list projects', js:true do
    visit '/'
    within('.project-list') do
      expect(page).to have_text('First Project')
      expect(page).to have_text('Second Project')
      expect(page).to have_text('Third Project')
    end
  end

end