require 'rails_helper'

RSpec.describe "puzzles/index", type: :view do
  before(:each) do
    assign(:puzzles, [
      Puzzle.create!(
        :word1 => "Word1",
        :word2 => "Word2",
        :word3 => "Word3",
        :word4 => "Word4",
        :word5 => "Word5",
        :word6 => "Word6"
      ),
      Puzzle.create!(
        :word1 => "Word1",
        :word2 => "Word2",
        :word3 => "Word3",
        :word4 => "Word4",
        :word5 => "Word5",
        :word6 => "Word6"
      )
    ])
  end

  it "renders a list of puzzles" do
    render
    assert_select "tr>td", :text => "Word1".to_s, :count => 2
    assert_select "tr>td", :text => "Word2".to_s, :count => 2
    assert_select "tr>td", :text => "Word3".to_s, :count => 2
    assert_select "tr>td", :text => "Word4".to_s, :count => 2
    assert_select "tr>td", :text => "Word5".to_s, :count => 2
    assert_select "tr>td", :text => "Word6".to_s, :count => 2
  end
end
