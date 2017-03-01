require 'rails_helper'

RSpec.describe "puzzles/show", type: :view do
  before(:each) do
    @puzzle = assign(:puzzle, Puzzle.create!(
      :words => "Words",
      :clues => "Clues"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Words/)
    expect(rendered).to match(/Clues/)
  end
end
