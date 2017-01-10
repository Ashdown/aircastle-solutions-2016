require_relative 'spec_helper'

feature 'homepage' do

  scenario 'should say Aircastle Solutions' do
    visit '/'
    expect(page).to have_text('Aircastle Solutions')
  end

  scenario 'should list projects', js:true do
    visit '/'
    expect(page).to have_text('Project One')
    expect(page).to have_text('Project Two')
    expect(page).to have_text('Project Three')
  end

end