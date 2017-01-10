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

  scenario 'should show first projects title', js:true do
    visit '/'
    expect(page).to have_text('Project One');
  end

  scenario 'should show a projects description', js:true do
    visit '/'
    expect(page).to have_text('This is the first projects description')
  end

  # scenario 'should show a projects keywords', js:true do
  #   expect(page.find('.project-list li:first')).to have_text('Keyword One')
  #   expect(page.find('.project-list li:first')).to have_text('Keyword Two')
  # end
  #
  # scenario 'should show a project link', js:true do
  #   expect(page.find('.project-list li:first .project-link')).to have_text('Sample Project Link')
  # end

end