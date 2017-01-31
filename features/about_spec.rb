require_relative('spec_helper')

feature('about') do

  scenario 'should show about module', js:true do
    visit '/'
    expect(page).to have_text('About')
  end

  scenario 'should show details', js:true do
    visit '/'
    within('.about') do
      expect(page).to have_text('Lorem ipsum dolar sit amet')
      # expect(page).to have_css('.about-image')
    end
  end

end