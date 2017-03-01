require 'rails_helper'

RSpec.describe "puzzles/index", type: :view do
  before(:each) do
    assign(:puzzles, [
      Puzzle.create!(
        :words => "Words",
        :clues => "Clues"
      ),
      Puzzle.create!(
        :words => "Words",
        :clues => "Clues"
      )
    ])
  end

  it "renders a list of puzzles" do
    render
    assert_select "tr>td", :text => "Words".to_s, :count => 2
    assert_select "tr>td", :text => "Clues".to_s, :count => 2
  end
end
