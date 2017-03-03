require 'spec_helper'

feature 'Authentication', js: true do
  feature 'login' do
    scenario 'with valid inputs' do
      @user = FactoryGirl.create(:user)
      visit '/#!/login'
      fill_in "email", with: @user.email
      fill_in "password", with: @user.password
      find("button", text: "login").click

      expect(page).to have_content('Sign out')
    end
  end
end
