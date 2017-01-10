require_relative 'spec_helper'

feature 'homepage' do

  scenario 'should say Aircastle Solutions' do
    visit '/'
    expect(page).to have_text('Aircastle Solutions')
  end

end