require_relative('spec_helper')

feature('links') do

  scenario 'should show title', js:true do
    visit '/'
    expect(page).to have_text('Links')
  end

  scenario 'should show links', js:true do
    visit '/'
    within('.link-list') do
      expect(page).to have_text('First Link')
      expect(page).to have_text('Second Link')
    end
  end

end