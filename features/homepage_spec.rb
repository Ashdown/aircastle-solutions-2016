require_relative 'spec_helper'

feature 'homepage' do

  # scenario 'should say Aircastle Solutions' do
  #   visit '/'
  #   expect(page).to have_text('Aircastle Solutions')
  # end

  scenario 'should list projects', js:true do
    visit '/'
    expect(page).to have_text('First Project')
    expect(page).to have_text('Second Project')
    expect(page).to have_text('Third Project')
  end

  scenario 'should show first projects title', js:true do
    visit '/'
    expect(page).to have_text('First Project');
  end

  scenario 'should show a projects description', js:true do
    visit '/'
    expect(page).to have_text('This is the first projects description')
  end

end